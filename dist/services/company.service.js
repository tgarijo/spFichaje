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
const CompanyController_1 = require("../controllers/CompanyController");
// import { ICompany } from './ICompany';
class CompanyService {
    //const postRepository = getManager().getRepository(Company);
    // private repositoryCompany: Repository<Company> 
    // constructor(private req: Request){
    //     this.repositoryCompany = getManager().getRepository(Company);
    // }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield new CompanyController_1.CompanyController().save(req.body);
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({
                    error: error.message,
                    data: null
                });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield new CompanyController_1.CompanyController().get();
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({
                    error: error.message,
                    data: null
                });
            }
        });
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map