"use strict";
//import assert from  'assert';
//import request = require("supertest");
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
const chai_1 = require("chai");
//import * as fetch from 'node-fetch';
const fetch = require('node-fetch');
//var url ="/role";
var url = "http://localhost:3000/role";
describe('API REST', () => {
    it('GET', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(url);
        chai_1.expect(response.status).to.be.equal(200);
        const companies = yield response.json();
        chai_1.expect(companies).to.be.an('Array');
        //expect(companies).to.be.greaterThan(1);
        console.log('Array', companies.length);
        console.log(companies);
        for (let company of companies) {
        }
        //console.log(roles);
    }));
});
//# sourceMappingURL=testRole.test.js.map