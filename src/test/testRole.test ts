import { expect } from "chai";
import fetch from 'node-fetch';

var url ="http://localhost:3000/role";

describe('API REST getRole', () => {
    it('GET', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const roles = await response.json();
        expect(roles.data).to.be.an('Array');
        expect(roles.error).to.be.null;
        
        if(roles.data){
            roles.data.forEach((role: any) => {
                console.log(role);
            });
        }
       
    })
})
