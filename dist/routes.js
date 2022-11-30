"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
(0, express_1.Router)().get('/', (req, res) => {
    res.send('using api route');
});
module.exports = (0, express_1.Router)();
