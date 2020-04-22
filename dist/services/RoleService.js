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
const RoleController_1 = require("../controllers/RoleController");
const Role_1 = require("../entity/Role");
const responseData_1 = require("../utils/responseData");
class RoleService {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield new RoleController_1.RoleController(Role_1.Role).save(req.body);
                // 
                return res.status(201).json(responseData_1.responseData(result, null)).send();
                //return res.status(200).json(result);
            }
            catch (error) {
                return res.status(500).json(responseData_1.responseData(null, error)).send();
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the ID from the url
            const id = req.params.id;
            try {
                let result = new RoleController_1.RoleController(Role_1.Role).update(parseInt(id), req.body);
                return res.status(201).json(responseData_1.responseData(result, null)).send();
                //return res.status(200).json(result);
            }
            catch (error) {
                return res.status(500).json(responseData_1.responseData(null, error)).send();
            }
        });
    }
    ;
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // role as typeof object
                let role = yield new RoleController_1.RoleController(Role_1.Role).get();
                return res.status(200).json(responseData_1.responseData(role, null)).send();
            }
            catch (error) {
                return res.status(500).json(responseData_1.responseData(null, error)).send();
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id);
            try {
                let role = yield new RoleController_1.RoleController(Role_1.Role).getById(id);
                return res.status(200).json(responseData_1.responseData(role, null)).send();
            }
            catch (error) {
                //console.log("Error number " , error)
                return res.status(500).json(responseData_1.responseData(null, error.message)).send();
            }
        });
    }
    getWithUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let role = yield new RoleController_1.RoleController(Role_1.Role).getWithUser();
                return res.status(200).json(responseData_1.responseData(role, null)).send();
            }
            catch (error) {
                //console.log("Error number " , error)
                return res.status(500).json(responseData_1.responseData(null, error.message)).send();
            }
        });
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=RoleService.js.map