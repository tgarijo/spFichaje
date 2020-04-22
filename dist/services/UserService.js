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
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
const User_1 = require("../entity/User");
const responseData_1 = require("../utils/responseData");
class UserService {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log();
                let result = yield new UserController_1.UserController(User_1.User).save(req.body);
                // 
                return res.status(201).json(responseData_1.responseData(result, null)).send();
                //return res.status(200).json(result);
            }
            catch (error) {
                return res.status(500).json(responseData_1.responseData(null, error)).send();
            }
            let { username, password, role } = req.body;
            user.username = username;
            user.password = password;
            user.role = role;
            // Validate if paramaters are ok
            const error = yield validate(user);
            if (error.length > 0) {
                res.status(400).json({
                    error: "Error Validate parameters",
                    data: null
                });
                return;
            }
            // Try to save. if fails, the username is already in use
            const userRepository = getRepository(User_1.User);
            try {
                yield userRepository.save(user);
            }
            catch (error) {
                res.status(409).json({
                    error: "username already in use",
                    data: null
                });
                return;
            }
            //If all ok, send 201 response
            res.status(203).json({
                error: null,
                data: "User create"
            }).send();
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map