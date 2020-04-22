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
var url = "http://localhost:3000/company";
describe('API REST getCompany', () => {
    it('GET', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield node_fetch_1.default(url);
        chai_1.expect(response.status).to.be.equal(200);
        const json = yield response.json();
        chai_1.expect(json.data).to.be.an('Array');
        chai_1.expect(json.error).to.be.null;
        if (json.data) {
            json.data.forEach((item) => {
                console.log(item);
            });
        }
    }));
});
//# sourceMappingURL=testCompany.test.js.map