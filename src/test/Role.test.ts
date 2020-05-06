import { expect } from "chai";
import fetch from 'node-fetch';

import { Role } from "../entity/Role";
import { IResponseData } from "../utils/IResponseData";



var url ="http://localhost:3000/role";

console.log("Getting Roles from DDBB")
console.log("-----------------------")

describe('Role Test', () => {
    
    it('GET all data', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const roles = await response.json();
        expect(roles.data).to.be.an('Array');
        expect(roles.error).to.be.null;
        
        // if(roles.data){
        //     roles.data.forEach((role: any) => {
        //         console.log(role);
        //     });
        // }
     
    }).timeout(10000);

    it('GET data with wrong data On Role', async () => {

        const roleId : number = 9999999;
        const templateUrl = `${url}/${roleId}`;
        const response = await fetch(templateUrl);

        expect(response.status).to.be.equal(500);
        const roles = await response.json();
        expect(roles.data).is.null;

    }).timeout(10000);

    it('Save and Delete', async () => {

        let role : Role = new Role();
        role.name = "test";
        
        const postResponse = await fetch(url,{
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

        const deleteResponse = await fetch(url + '/' + roleDelete.id, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(10000);

})

