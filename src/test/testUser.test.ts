import { expect } from "chai";
import fetch from 'node-fetch';
import { User } from "../entity/User";
import { IResponseData } from "../utils/IResponseData";
import { Role } from "../entity/Role";


let userUrl: string ="http://localhost:3000/user";
let  roleUrl: string ="http://localhost:3000/role";
let roleId: number = 1;

describe('API REST User', () => {
    it('GET All User', async () => {
        const response = await fetch(userUrl);
        expect(response.status).to.be.equal(200);
        
        const users = await response.json();
        expect(users.data).to.be.an('Array');
        expect(users.error).to.be.null;
        
        // if(users.data){
        //     users.data.forEach((user: any) => {
        //         console.log(user);
        //     });
        // }
       
    })
})
describe('API REST Save an Delete  User', () => {
    it('POST Save an Delete ', async () => {
        let user: User = new User();
  
     
        let getResponse =  await fetch(roleUrl + '/' + roleId);
       
        let roleResponse: IResponseData = await getResponse.json()


        let role  = <Role> roleResponse.data
       
        user.username = "testuser";
        user.firstName = "testFirstName";
        user.lastName = "testLastName";
        user.password = "testPassword";
        user.createdAt = new Date();
        user.updateAt = new Date();
        user.role = role

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


         const deleteResponse = await fetch(userUrl + '/' + userDelete.id, {
             method: 'DELETE',
         });
 
         expect(await deleteResponse.status).to.be.equal(201);

    })
})

