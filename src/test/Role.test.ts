import { expect } from "chai";
import fetch from 'node-fetch';

import { Role } from "../entity/Role";
import { IResponseData } from "../utils/IResponseData";



const roleUrl : string ="http://localhost:3000/role";
const timeOutValue : number = 10000;

console.log("Getting Roles from DDBB")
console.log("-----------------------")

describe('Role Test', () => {
    
    it('GET all data', async () => {
        const response = await fetch(roleUrl);
        expect(response.status).to.be.equal(200);
        
        const roles = await response.json();
        expect(roles.data).to.be.an('Array');
        expect(roles.error).to.be.null;
        
        // if(roles.data){
        //     roles.data.forEach((role: any) => {
        //         console.log(role);
        //     });
        // }
     
    }).timeout(timeOutValue);

    it('GET data with wrong data On Role', async () => {

        const roleId : number = 9999999;
        const templateRoleUrl = `${roleUrl}/${roleId}`;
        const response = await fetch(templateRoleUrl);

        expect(response.status).to.be.equal(500);
        const roles = await response.json();
        expect(roles.data).is.null;

    }).timeout(timeOutValue);

    it('Save and Delete', async () => {

        
        const role : Role = new Role();
        role.name = "test";
        
        const postResponse = await fetch(roleUrl,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(role)
        });

        expect(await postResponse.status).to.be.equal(201);

        // Start delete record created before
        let dataResponse = <IResponseData> await postResponse.json();

        let roleDelete =  <Role> dataResponse.data;

        // console.log("Role to Delete: " , roleDelete);

        const templateRoleUrl = `${roleUrl}/${roleDelete.id}`;

        const deleteResponse = await fetch(templateRoleUrl, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(timeOutValue);

    it('Get Role by id', async () => {
        const roleId = 1;

        const templateRoleUrl = `${roleUrl}/${roleId}`
        const response = await fetch(templateRoleUrl);
       
        expect(response.status).to.be.equal(200);
    }).timeout(timeOutValue);

    it('Update data', async () => {
        const updateId = 1;

        const templateRole = `${roleUrl}/${updateId}`
        const response = await fetch(templateRole);
       
        expect(response.status).to.be.equal(200);

        const responseRole= await response.json()  as IResponseData
    
        const role: Role =  responseRole.data as Role;

        role.name = 'admin';

        const putResponse = await fetch(templateRole,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(role)
        });
        expect(await putResponse.status).to.be.equal(201);

        const putResponseError = await putResponse.json() as IResponseData

        expect(putResponseError.error).is.null;


    }).timeout(timeOutValue);
})

