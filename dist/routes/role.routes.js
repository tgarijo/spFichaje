"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoleService_1 = require("../services/RoleService");
const router = express_1.Router();
console.log('RoleRoute');
let roleService = new RoleService_1.RoleService();
router.route('/role')
    .post(roleService.save)
    .get(roleService.get);
router.route('/role/:id')
    .get(roleService.getById)
    .put(roleService.update);
router.route("/role/getWithUser")
    .get(roleService.getWithUser);
exports.default = router;
//# sourceMappingURL=role.routes.js.map