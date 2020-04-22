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
const Company_1 = require("../entity/Company");
const typeorm_1 = require("typeorm");
class CompanyController {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let repository = typeorm_1.getManager().getRepository(Company_1.Company);
                let saveData = repository.create(data);
                yield repository.save(saveData);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let repository = typeorm_1.getManager().getRepository(Company_1.Company);
                return yield repository.findAndCount();
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let repository = typeorm_1.getManager().getRepository(Company_1.Company);
                let company = yield repository.findOneOrFail(id);
                return company;
            }
            catch (error) {
                //console.log(error);
                throw new Error(error);
            }
        });
    }
}
exports.CompanyController = CompanyController;
//export async function companyController(req: Request, res: Response) {}
//# sourceMappingURL=CompanyController.js.map