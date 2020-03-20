"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../entity/Company");
const express_1 = __importDefault(require("express"));
function companyController(req, res) {
    const app = express_1.default();
    const company = new Company_1.Company();
    const database = app.get('database');
}
exports.companyController = companyController;
//# sourceMappingURL=company.controller.js.map