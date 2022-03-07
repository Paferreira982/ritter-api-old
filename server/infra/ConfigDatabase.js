const ENV = require("./ConfigEnviroment");

exports.initDB = async function () {
    const database = require("../../database/Database");
    const userService = require("../service/UserService");
    const roleService = require("../service/RoleService");

    await database.sync();
    const roles = await roleService.findAll();

    if (roles === null || roles.length === 0) {
        await roleService.save({ name: "ROLE_ADMIN" });
        await roleService.save({ name: "ROLE_USER" });
    }

    const admin = await userService.findByUserName(ENV.USER_DEFAULT_NAME);
    if (admin === null) {
        const role = await roleService.findByName("ROLE_ADMIN");
        await userService.save(await getDefaultUser());
        const user = await userService.findByUserName(ENV.USER_DEFAULT_NAME);
        await user.setRoles([role]);
    }
}

exports.generateDatabase = async function () {
    const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host: ENV.DB_URL,
        user: ENV.DB_USER, 
        password: ENV.DB_PASSWORD,
        connectionLimit: 5
    });

    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query(`CREATE DATABASE IF NOT EXISTS ${ENV.DB_NAME}`);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

async function getDefaultUser() {
    return { 
        name: ENV.USER_DEFAULT_NAME,
        username: ENV.USER_DEFAULT_NAME,
        password: ENV.USER_DEFAULT_PASSWORD,
        email: ENV.USER_DEFAULT_EMAIL,
        telephone: ENV.USER_DEFAULT_TEL
    }
}