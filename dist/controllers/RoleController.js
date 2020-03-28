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
const typeorm_1 = require("typeorm");
const Role_1 = require("../entity/Role");
class RoleController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("RoleController.save()");
            try {
                // get a post repository to perform operations with post
                let roleRepository = typeorm_1.getManager().getRepository(Role_1.Role);
                let role = roleRepository.create(req.body);
                yield roleRepository.save(role);
                return res.status(200).json(roleRepository.getId);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("RoleController.get()");
            try {
                let roleRepository = typeorm_1.getManager().getRepository(Role_1.Role);
                return res.status(200).json(yield roleRepository.findAndCount());
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("RoleController.getById()");
            try {
                let roleRepository = typeorm_1.getManager().getRepository(Role_1.Role);
                let id = parseInt(req.params.id);
                console.log(id);
                return res.status(201).json(yield roleRepository.findOne(id));
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
}
exports.RoleController = RoleController;
//# sourceMappingURL=RoleController.js.map