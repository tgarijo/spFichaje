"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserService_1 = require("../services/UserService");
const router = express_1.Router();
console.log('UserRoute');
let userService = new UserService_1.UserService();
router.route('/user')
    .post(userService.save);
//.get(roleService.get);
// router.route('/role/:id')
//     .get(roleService.getById)
//     .put(roleService.update);
// router.route("/role/getWithUser")
//     .get(roleService.getWithUser);
exports.default = router;
//# sourceMappingURL=user.routes..js.map