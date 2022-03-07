exports.initDB = async function () {
    const database = require("../../database/database");
    const userService = require("../service/userService");
    const roleService = require("../service/roleService");

    await database.sync();
    const roles = await roleService.findAll();

    if (roles === null || roles.length === 0) {
        await roleService.save({ name: "ROLE_ADMIN" });
        await roleService.save({ name: "ROLE_USER" });
    }

    const admin = await userService.findByUserName("admin");
    if (admin === null) {
        const role = await roleService.findByName("ROLE_ADMIN");
        await userService.save(await getDefaultUser());
        const user = await userService.findByUserName("admin");
        await user.setRoles([role]);
    }
}

exports.generateDatabase = async function () {
    const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host: 'localhost',
        user:'root', 
        password: 'admin123',
        connectionLimit: 5
    });

    let conn;
    try {
        conn = await pool.getConnection();
        const response = await conn.query("CREATE DATABASE IF NOT EXISTS ritter");
        console.log("REPOSTA: " + response);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

async function getDefaultUser() {
    return { 
        name: "Admin",
        username: "admin",
        password: "admin123",
        email: "contato@paferreira.com",
        telephone: "21992540982"
    }
}