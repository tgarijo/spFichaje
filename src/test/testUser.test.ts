import { expect } from "chai";
import fetch from 'node-fetch';
import { CompanyController } from '../controllers/CompanyController';

var url ="http://localhost:3000/user";

describe('API REST save', () => {
    it('PUT', async () => {
        
        let company = CompanyController

        let role = {

        };
        let user = {
            username: 'tgarijo',
            password: 'tgarijo',
            firstName: 'Tomas',
            lastName: 'Garijo'
        };
    })
})
describe('API REST getUser', () => {
    it('GET', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const users = await response.json();
        expect(users.data).to.be.an('Array');
        expect(users.error).to.be.null;
        
        if(users.data){
            users.data.forEach((user: any) => {
                console.log(user);
            });
        }
       
    })
})
