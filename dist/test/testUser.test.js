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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const node_fetch_1 = __importDefault(require("node-fetch"));
const CompanyController_1 = require("../controllers/CompanyController");
var url = "http://localhost:3000/user";
describe('API REST save', () => {
    it('PUT', () => __awaiter(void 0, void 0, void 0, function* () {
        let company = CompanyController_1.CompanyController;
        let role = {};
        let user = {
            username: 'tgarijo',
            password: 'tgarijo',
            firstName: 'Tomas',
            lastName: 'Garijo'
        };
    }));
});
describe('API REST getUser', () => {
    it('GET', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield node_fetch_1.default(url);
        chai_1.expect(response.status).to.be.equal(200);
        const users = yield response.json();
        chai_1.expect(users.data).to.be.an('Array');
        chai_1.expect(users.error).to.be.null;
        if (users.data) {
            users.data.forEach((user) => {
                console.log(user);
            });
        }
    }));
});
//# sourceMappingURL=testUser.test.js.map