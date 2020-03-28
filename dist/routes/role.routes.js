"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoleController_1 = require("../controllers/RoleController");
const router = express_1.Router();
console.log('RoleRoute');
router.route('/role')
    .post(new RoleController_1.RoleController().save)
    .get(new RoleController_1.RoleController().get);
router.route('/role/:id')
    .get(new RoleController_1.RoleController().getById);
exports.default = router;
//# sourceMappingURL=role.routes.js.map