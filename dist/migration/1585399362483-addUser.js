"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const RoleController_1 = require("../controllers/RoleController");
const Role_1 = require("../entity/Role");
const User_1 = require("../entity/User");
const UserController_1 = require("../controllers/UserController");
class addUser1585399362483 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            let password = bcrypt.hashSync('user_p', 8);
            let roleController = new RoleController_1.RoleController(Role_1.Role);
            let role = yield roleController.getById(1);
            let roleIdenty = Object.setPrototypeOf(role, Role_1.Role.prototype);
            console.log("Role: ", role);
            console.log("roleIdenty: ", roleIdenty);
            let userIndenty = new User_1.User();
            userIndenty.firstName = "Tomas";
            userIndenty.lastName = "Garijo";
            userIndenty.password = password;
            userIndenty.role = roleIdenty;
            new UserController_1.UserController(User_1.User).save;
            //roleController.getById()
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.addUser1585399362483 = addUser1585399362483;
//# sourceMappingURL=1585399362483-addUser.js.map