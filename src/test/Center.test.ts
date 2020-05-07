import { expect } from "chai";
import fetch from 'node-fetch';

import { Center } from "../entity/Center";
import { IResponseData } from "../utils/IResponseData";
import { Company } from "../entity/Company";
import { User } from "../entity/User";



const centerUrl: string ="http://localhost:3000/center";
const companyUrl: string ="http://localhost:3000/company";
const userUrl: string ="http://localhost:3000/user";

const timeOutValue : number = 10000;

console.log("Getting Center from DDBB")
console.log("-----------------------")

describe('Center Test', () => {
    
    it('GET all data', async () => {
        const response = await fetch(centerUrl);
        expect(response.status).to.be.equal(200);
        
        const center = await response.json();
        expect(center.data).to.be.an('Array');
        expect(center.error).to.be.null;
     
    }).timeout(timeOutValue);

    it('GET data with wrong data On Center', async () => {

        const centerId : number = 9999999;
        const templateUrl = `${centerUrl}/${centerId}`;
        const response = await fetch(templateUrl);

        expect(response.status).to.be.equal(500);
        const center = await response.json();
        expect(center.data).is.null;

    }).timeout(timeOutValue);

    it('Save and Delete', async () => {

        const companyId : number = 1;
        const templateCompany= `${companyUrl}/${companyId}`;
        const responseCompany = await fetch(templateCompany);

        const companyResponse: IResponseData  = await responseCompany.json()

        const company = companyResponse.data as Company


        // const userId : number = 1;
        // const templateUrl = `${userUrl}/${userId}`;
        // const responseUser = await fetch(templateUrl);

        // const userResponse: IResponseData  = await responseUser.json();

        // const user = userResponse.data as User;


        const center = new Center();
        center.company = company;
        // center.user = user;
        center.name = 'Center 99';


        const postResponse = await fetch(centerUrl,{
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

       
        const centerTemplate= `${centerUrl}/${centerDelete.id}`;
        const deleteResponse = await fetch(centerTemplate, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(10000);

    it('Get Role by id', async () => {
        const centerId = 1;

        const templateRoleUrl = `${centerUrl}/${centerId}`
        const response = await fetch(templateRoleUrl);
       
        expect(response.status).to.be.equal(200);
    }).timeout(timeOutValue);

    it('Update data', async () => {
        const updateId = 1;

        const templateCenter = `${centerUrl}/${updateId}`
        const response = await fetch(templateCenter);
       
        expect(response.status).to.be.equal(200);

        const responseRole= await response.json()  as IResponseData
    
        const center: Center =  responseRole.data as Center;

        center.name = 'center 80';

        const putResponse = await fetch(templateCenter,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(center)
        });
        expect(await putResponse.status).to.be.equal(201);

        const putResponseError = await putResponse.json() as IResponseData

        expect(putResponseError.error).is.null;


    }).timeout(timeOutValue);
})

