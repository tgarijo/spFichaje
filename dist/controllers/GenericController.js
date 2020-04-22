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
class GenericController {
    constructor(type) {
        this.repository = typeorm_1.getManager().getRepository(type);
    }
    getRepository() {
        return this.repository;
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getDataById = yield this.getById(id);
                // Copy object properties from source to target
                let UpdateData = Object.assign(getDataById, data);
                // Remove this code because is validate by hooks on entity file
                //let  error = await validate(UpdateData);
                // if(error.length > 0) throw new Error(error.toString()); 
                return yield this.save(UpdateData);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.repository.findOneOrFail(id);
            }
            catch (error) {
                throw new Error(error);
            }
            return yield this.repository.delete(id);
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let saveData = this.repository.create(data);
                return yield this.repository.save(saveData);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.repository.find();
                return data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.repository.findOneOrFail(id);
                return data;
            }
            catch (error) {
                console.error("Error Message:", error.message);
                throw new Error(error);
            }
        });
    }
}
exports.GenericController = GenericController;
//# sourceMappingURL=GenericController.js.map