import { expect } from "chai";
import fetch from 'node-fetch';

var url ="http://localhost:3000/company";

describe('API REST getCompany', () => {
    it('GET', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const json = await response.json();
        expect(json.data).to.be.an('Array');
        expect(json.error).to.be.null;
        
        if(json.data){
            json.data.forEach((item: any) => {
                console.log(item);
            });
        }
       
    })
})
