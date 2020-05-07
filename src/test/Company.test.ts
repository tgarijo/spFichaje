import { expect } from "chai";
import fetch from 'node-fetch';

import { Company } from "../entity/Company";
import { IResponseData } from "../utils/IResponseData";



var companyUrl : string ="http://localhost:3000/company";
const timeOutValue : number = 10000;

console.log("Getting Company from DDBB")
console.log("-----------------------")

describe('Company  Test', () => {
    
    it('GET all data', async () => {
        const response = await fetch(companyUrl);
        expect(response.status).to.be.equal(200);
        
        const company = await response.json();
        expect(company.data).to.be.an('Array');
        expect(company.error).to.be.null;
     
    }).timeout(timeOutValue);

    it('GET data with wrong data On Company', async () => {

        const companyId : number = 9999999;
        const templateUrl = `${companyUrl}/${companyId}`;
        const response = await fetch(templateUrl);

        expect(response.status).to.be.equal(500);
        const company = await response.json();
        expect(company.data).is.null;

    }).timeout(timeOutValue);

    it('Save and Delete', async () => {

        const company : Company = new Company();
        company.name = "test";
        company.adress = "Company test address"
        
        const postResponse = await fetch(companyUrl,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(company)
        });

    
        expect(await postResponse.status).to.be.equal(201);

        // Start delete record created before
        const dataResponse = <IResponseData> await postResponse.json();

        const companyDelete =  <Company> dataResponse.data;

        // console.log("Role to Delete: " , roleDelete);
        const templateCompanyUrl = `${companyUrl}/${companyDelete.id}`;

        const deleteResponse = await fetch(templateCompanyUrl, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(timeOutValue);

    it('Get company by id', async () => {
        const companyId = 1;

        const templateRoleUrl = `${companyUrl}/${companyId}`
        const response = await fetch(templateRoleUrl);
       
        expect(response.status).to.be.equal(200);
    }).timeout(timeOutValue);

    it('Update data', async () => {
        const updateId = 1;

        const templateRole = `${companyUrl}/${updateId}`
        const response = await fetch(templateRole);
       
        expect(response.status).to.be.equal(200);

        const responseRole= await response.json()  as IResponseData
    
        const company: Company =  responseRole.data as Company;

        company.name = 'company 3';

        const putResponse = await fetch(templateRole,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(company)
        });
        expect(await putResponse.status).to.be.equal(201);

        const putResponseError = await putResponse.json() as IResponseData

        expect(putResponseError.error).is.null;


    }).timeout(timeOutValue);
})

