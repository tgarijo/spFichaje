"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Company_1 = require("../entity/Company");
class CompanyService {
    constructor(req) {
        this.req = req;
        this.repositoryCompany = typeorm_1.getManager().getRepository(Company_1.Company);
    }
    save(req) {
        this.repositoryCompany.save();
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map