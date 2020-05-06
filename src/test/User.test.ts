import { expect } from "chai";
import fetch from 'node-fetch';
import { User } from "../entity/User";
import { IResponseData } from "../utils/IResponseData";
import { Role } from "../entity/Role";


const userUrl: string ="http://localhost:3000/user";
const roleUrl: string ="http://localhost:3000/role";

console.log("Getting Roles from DDBB")
console.log("-----------------------")

describe('User Test', () => {
    it('GET All data', async () => {
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

    it('POST Save and Delete', async () => {

        const roleId: number = 1;
        const user: User = new User();
  
     
        const templateRole = `${roleUrl}/${roleId}`;

        const getResponse =  await fetch(templateRole);
       
        const roleResponse: IResponseData = await getResponse.json()


        const role  = <Role> roleResponse.data
       
        user.username = "testuser";
        user.firstName = "testFirstName";
        user.lastName = "testLastName";
        user.password = "testPassword";
        user.email = 'pepito@pepito.es';
        user.isActive = true;
        //user.createdAt = new Date();
        //user.updateAt = new Date();
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

        const templateUser = `${userUrl}/${userDelete.id}`;

         const deleteResponse = await fetch(templateUser, {
             method: 'DELETE',
         });
 
         expect(await deleteResponse.status).to.be.equal(201);

    })
})
