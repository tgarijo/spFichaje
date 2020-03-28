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
const Company_1 = require("../entity/Company");
class CompanyController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("CompanyController.save()");
            try {
                // get a post repository to perform operations with post
                let companyRepository = typeorm_1.getManager().getRepository(Company_1.Company);
                let company = companyRepository.create(req.body);
                yield companyRepository.save(company);
                return res.status(200).json(companyRepository.getId);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("CompanyController.get()");
            try {
                let companyRepository = typeorm_1.getManager().getRepository(Company_1.Company);
                return res.status(200).json(yield companyRepository.findAndCount());
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("CompanyController.getById()");
            try {
                let companyRepository = typeorm_1.getManager().getRepository(Company_1.Company);
                let id = parseInt(req.params.id);
                console.log(id);
                return res.status(201).json(yield companyRepository.findOne(id));
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("{error: Ha ocurrido un error}");
            }
        });
    }
}
exports.CompanyController = CompanyController;
//export async function companyController(req: Request, res: Response) {}
//# sourceMappingURL=CompanyController.js.map