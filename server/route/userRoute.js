const express = require("express");
const router = express.Router();

const service = require("../service/userService");

router.get("/", async function (req, res) {
    res.json(await service.findAll());
});

router.get("/:id", async function (req, res) {
    res.json(await service.findById(req.params.id));
});

router.post("/", async function (req, res) {
    res.json(await service.save(req.body));
});

router.put("/", async function (req, res) {
    res.json(await service.update(req.body));
});

router.delete("/:id", async function (req, res) {
    res.json(await service.removeById(req.params.id));
});

module.exports = router;