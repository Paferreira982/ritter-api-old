const express = require("express");
const router = express.Router();

const service = require("../service/userService");

router.get("/", async function (req, res) {
    res.json(await service.findAll());
});

router.get("/user/:id", async function (req, res) {
    res.json(await service.findById(req.params.id));
});

router.post("/user", async function (req, res) {
    res.json(await service.save(req.body));
});

router.put("/user", async function (req, res) {
    res.json(await service.update(req.body));
});

router.delete("/user/:id", async function (req, res) {
    res.json(await service.removeById(req.params.id));
});

module.exports = router;