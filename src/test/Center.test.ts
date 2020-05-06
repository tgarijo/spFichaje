import { expect } from "chai";
import fetch from 'node-fetch';

import { Center } from "../entity/Center";
import { IResponseData } from "../utils/IResponseData";
import { Company } from "../entity/Company";
import { User } from "../entity/User";



const url ="http://localhost:3000/center";
const urlCompany ="http://localhost:3000/company";
const userUrl: string ="http://localhost:3000/user";

console.log("Getting Center from DDBB")
console.log("-----------------------")

describe('Center Test', () => {
    
    it('GET all data', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const roles = await response.json();
        expect(roles.data).to.be.an('Array');
        expect(roles.error).to.be.null;
     
    }).timeout(10000);

    it('GET data with wrong data On Center', async () => {

        const centerId : number = 9999999;
        const templateUrl = `${url}/${centerId}`;
        const response = await fetch(templateUrl);

        expect(response.status).to.be.equal(500);
        const roles = await response.json();
        expect(roles.data).is.null;

    }).timeout(10000);

    it('Save and Delete', async () => {

        const companyId : number = 1;
        const templateUser= `${userUrl}/${companyId}`;
        const responseUser = await fetch(templateUser);

        const userResponse: IResponseData  = await responseUser.json()

        const company = userResponse.data as Company


        const userId : number = 1;
        const templateUrl = `${urlCompany}/${userId}`;
        const response = await fetch(templateUrl);

        const companyResponse: IResponseData  = await response.json();

        const user = companyResponse.data as User;


        const center = new Center();
        center.company = company;
        center.user = user;
        center.name = 'Center 99';


        const postResponse = await fetch(url,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(center)
        });
        expect(await postResponse.status).to.be.equal(201);

       
        const dataResponse = <IResponseData> await postResponse.json();

        // console.log(dataResponse);

        const centerDelete = dataResponse.data as Center;

       
        const centerTemplate= `${url}/${centerDelete.id}`;
        const deleteResponse = await fetch(centerTemplate, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(10000);

})

