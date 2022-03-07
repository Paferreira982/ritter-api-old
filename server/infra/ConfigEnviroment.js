require('dotenv').config();

// DATABASE CONFIGURATION //
exports.DB_NAME = process.env.DB_NAME || "ritter";
exports.DB_USER = process.env.DB_USER || "root";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "admin123";
exports.DB_URL = process.env.DB_URL || "localhost";
exports.DB_PORT = process.env.DB_PORT || 3306;
exports.DB_TZ = process.env.DB_TZ || "America/Sao_Paulo";

// DEFAULT USER CONFIGURATION //
exports.USER_DEFAULT_NAME = process.env.USER_DEFAULT_NAME || "admin";
exports.USER_DEFAULT_PASSWORD = process.env.USER_DEFAULT_PASSWORD || "admin123";
exports.USER_DEFAULT_EMAIL = process.env.USER_DEFAULT_EMAIL || "contato@paferreira.com";
exports.USER_DEFAULT_TEL = process.env.USER_DEFAULT_TEL || "21992540982";