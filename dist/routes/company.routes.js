"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompanyController_1 = require("../controllers/CompanyController");
const router = express_1.Router();
console.log('companyRoute');
router.route('/company')
    .post(new CompanyController_1.CompanyController().save)
    .get(new CompanyController_1.CompanyController().get);
router.route('/company/:id')
    .get(new CompanyController_1.CompanyController().getById);
exports.default = router;
//# sourceMappingURL=company.routes.js.map