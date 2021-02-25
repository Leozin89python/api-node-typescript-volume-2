"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (req, res) {
    return res.json({
        msg: 'online in port 3004'
    });
});
exports.default = routes;
