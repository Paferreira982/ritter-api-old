const express = require("express");
const router = express.Router();
const service = require("../service/AuthService");

router.post("/login", async function (req, res) {
    const response = await service.login(req.body.username, req.body.password);
    res.status(response.status).json(response.body).end();
});

module.exports = router;
