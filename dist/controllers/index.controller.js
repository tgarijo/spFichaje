"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
function indexWelcome(req, res) {
    const app = express_1.default();
    const database = new database_1.Database();
    const connection = database.getConnection();
    //console.log(connection);
    return res.json('Welcome to my Api');
}
exports.indexWelcome = indexWelcome;
//# sourceMappingURL=index.controller.js.map