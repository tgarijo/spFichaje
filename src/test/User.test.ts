import { expect } from "chai";
import fetch from 'node-fetch';
import { User } from "../entity/User";
import { IResponseData } from "../utils/IResponseData";
import { Role } from "../entity/Role";
import { Center } from "../entity/Center";
import {flatten} from "flat";

const baseUrl : string = "http://localhost:3000"
const userUrl: string = `${baseUrl}/user` //"http://localhost:3000/user";
const roleUrl: string = `${baseUrl}/role` //"http://localhost:3000/role";
const centerUrl: string = `${baseUrl}/center` //"http://localhost:3000/center";
const getAllDataUrl :string = `${baseUrl}/getAllData`

const timeOutValue : number = 10000;

console.log("Getting Roles from DDBB")
console.log("-----------------------")

describe('User Test', () => {
    it('GET All data', async () => {
        const response = await fetch(userUrl);
        expect(response.status).to.be.equal(200);
        
        const users = await response.json();
        expect(users.data).to.be.an('Array');
        expect(users.error).to.be.null;
       
    }).timeout(timeOutValue);

    it('POST Save and Delete', async () => {

        const roleId: number = 1;
        const user: User = new User();

        const templateRole = `${roleUrl}/${roleId}`;
        const getResponseRole =  await fetch(templateRole);
        const roleResponse: IResponseData = await getResponseRole.json();
        const role  = <Role> roleResponse.data
       
        expect(await getResponseRole.status).to.be.equal(200);

        const centerId: number = 1;
       

        const templateCenter = `${centerUrl}/${centerId}`;
        const getResponseCenter =  await fetch(templateCenter);
        const centerResponse: IResponseData = await getResponseCenter.json();
        const center: Center = centerResponse.data as Center;

        expect(await getResponseCenter.status).to.be.equal(200);


        user.username = "testuser";
        user.firstName = "testFirstName";
        user.lastName = "testLastName";
        user.password = "testPassword";
        user.email = 'pepito@pepito.es';
        user.isActive = true;
        user.role = role
        user.center = center;

       
        const postResponse = await fetch(userUrl,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
        });

    

        expect(await postResponse.status).to.be.equal(201);

        //  // Start delete record created before
        let dataResponse = <IResponseData> await postResponse.json();

        let userDelete =  <User> dataResponse.data;

        const templateUser = `${userUrl}/${userDelete.id}`;

         const deleteResponse = await fetch(templateUser, {
             method: 'DELETE',
         });
 
         expect(await deleteResponse.status).to.be.equal(201);

    }).timeout(timeOutValue);
    it('Get by id', async () => {
        const userId = 1;

        const templateUser = `${userUrl}/${userId}`
        const response = await fetch(templateUser);
       
        expect(response.status).to.be.equal(200);
    }).timeout(timeOutValue);

    it('Update data', async () => {
        const updateId = 1;

        const templateUser = `${userUrl}/${updateId}`
        const response = await fetch(templateUser);
       
        expect(response.status).to.be.equal(200);

        const responseUser = await response.json()  as IResponseData
    
        const user: User =  responseUser.data as User;

        user.lastName = "Garijo"

        const putResponse = await fetch(templateUser,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
        });
        expect(await putResponse.status).to.be.equal(201);

        const putResponseError = await putResponse.json() as IResponseData

        expect(putResponseError.error).is.null;


    }).timeout(timeOutValue);

    it.only('Get deep all data', async () => {

        const userId : number = 1;
        const templateUsrl = `${getAllDataUrl}/${userId}`;

        const response = await fetch(templateUsrl);
        
        expect(response.status).to.be.equal(200);
        
        // await response.json().then(data => {
        //     data.flat()
        //     const dataUser : IResponseData = data.data as IResponseData;

        //     console.log(flatten(dataUser,{ maxDepth: 2 }));
            
        // })
        

    });

})
