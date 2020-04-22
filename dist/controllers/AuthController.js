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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const User_1 = require("../entity/User");
const config_1 = __importDefault(require("../config/config"));
class AuthController {
}
exports.AuthController = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = req.body;
    if (!(username && password)) {
        res.status(400).json({
            error: "Not user and password",
            data: null
        }).send();
    }
    // Get user from database
    let userRepository = typeorm_1.getRepository(User_1.User);
    let user = new User_1.User();
    try {
        user = yield userRepository.findOneOrFail({ where: { username } });
    }
    catch (error) {
        res.status(401).json({
            error: "Problems user",
            data: null
        }).send();
    }
    // Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).json({
            error: "Problems user",
            data: null
        }).send();
        return;
    }
    //Sing JWT, valifd for 1 hour
    let token = jwt.sign({ userId: user.id, username: user.username }, config_1.default.jwtSecret, { expiresIn: "1h" });
    // Send token
    res.send(token);
});
AuthController.changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get ID from jwt
    const id = res.locals.jwtPayload.userId;
    // Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
        res.status(400).json({
            error: "Problems change Password",
            data: null
        }).send();
    }
    // Get user from database
    const userRepository = typeorm_1.getRepository(User_1.User);
    let user;
    try {
        user = yield userRepository.findOneOrFail(id);
    }
    catch (id) {
        res.status(401).json({
            error: "Error change password",
            data: null
        }).send();
    }
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
        res.status(401).json({
            error: "Error change password",
            data: null
        }).send();
        return;
    }
    // Validate de model (password lenght)
    user.password = newPassword;
    const error = yield class_validator_1.validate(user);
    if (error.length > 0) {
        res.status(400).json({
            error,
            data: null
        }).send();
        return;
    }
    // Hash the new password and save
    user.hashPassword();
    let todo = userRepository.save(user);
    res.status(204).json({
        error: null,
        data: todo
    }).send();
});
//# sourceMappingURL=AuthController.js.map