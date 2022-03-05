const security = require("../security/encrypt")
const database = require("../../database/database");
const userService = require("../service/userService");
const roleService = require("../service/roleService");

exports.initDB = async function () {
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

async function getDefaultUser() {
    return { 
        name: "Admin",
        username: "admin",
        password: security.encryptPassword("admin123"),
        email: "contato@paferreira.com",
        telephone: "21992540982"
    }
}