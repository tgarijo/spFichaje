import { expect } from "chai";
import fetch from 'node-fetch';


import { IResponseData } from "../utils/IResponseData";

import { Stopdescription } from "../entity/StopDescription";





const stopDescriptionUrl: string ="http://localhost:3000/stopdescription";

const timeOutValue : number = 10000;

console.log("Getting StopDescription from DDBB")
console.log("-----------------------")

describe('StopDescription Test', () => {
    
    it.only('GET all data', async () => {
        const response = await fetch(stopDescriptionUrl);
        expect(response.status).to.be.equal(200);
        
        const stopDescription = await response.json();
        expect(stopDescription.data).to.be.an('Array');
        expect(stopDescription.error).to.be.null;
     
    }).timeout(timeOutValue);

    it('GET data with wrong data On Center', async () => {

        const stopDescriptionId : number = 9999999;
        const templateUrl = `${stopDescriptionUrl}/${stopDescriptionId}`;
        const response = await fetch(templateUrl);

        expect(response.status).to.be.equal(500);
        const stopDescription = await response.json();
        expect(stopDescription.data).is.null;

    }).timeout(timeOutValue);

    it('Save and Delete', async () => {

        const stopDescription = new Stopdescription();

        stopDescription.name= "Test";

        const postResponse = await fetch(stopDescriptionUrl,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(stopDescription)
        });
        expect(await postResponse.status).to.be.equal(201);

       
        const dataResponse = <IResponseData> await postResponse.json();

        // console.log(dataResponse);

        const stopDescriptionDelete = dataResponse.data as Stopdescription;

       
        const stopDescriptionTemplate= `${stopDescriptionUrl}/${stopDescriptionDelete.id}`;
        const deleteResponse = await fetch(stopDescriptionTemplate, {
            method: 'DELETE',
        });

        expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(10000);

    it('Get Role by id', async () => {
        const stopDescriptionId = 1;

        const templatestopDescriptionUrl = `${stopDescriptionUrl}/${stopDescriptionId}`
        const response = await fetch(templatestopDescriptionUrl);
       
        expect(response.status).to.be.equal(200);
    }).timeout(timeOutValue);

    it('Update data', async () => {
        const stopDescriptionId = 1;

        const templatestopDescriptionUrl = `${stopDescriptionUrl}/${stopDescriptionId}`
        const response = await fetch(templatestopDescriptionUrl);
       
        expect(response.status).to.be.equal(200);

        const responsestopDescription= await response.json()  as IResponseData

        const stopDescriptioUpdate = responsestopDescription.data as Stopdescription;

        stopDescriptioUpdate.name = 'test 1';

        const putResponse = await fetch(templatestopDescriptionUrl,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(stopDescriptioUpdate)
        });
        expect(await putResponse.status).to.be.equal(201);

        const putResponseError = await putResponse.json() as IResponseData

        expect(putResponseError.error).is.null;


    }).timeout(timeOutValue);
})

