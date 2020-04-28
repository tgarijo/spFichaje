import { expect } from "chai";
import fetch from 'node-fetch';
import { User } from "../entity/User";
import { IResponseData } from "../utils/IResponseData";
import { Role } from "../entity/Role";


var url ="http://localhost:3000/user";

// describe('API REST save', () => {
//     it('PUT', async () => {
        
//         let company = CompanyController

//         let role = {

//         };
//         let user = {
//             username: 'tgarijo',
//             password: 'tgarijo',
//             firstName: 'Tomas',
//             lastName: 'Garijo'
//         };
//     })
// })
describe('API REST getUser', () => {
    it('GET', async () => {
        const response = await fetch(url);
        expect(response.status).to.be.equal(200);
        
        const users = await response.json();
        expect(users.data).to.be.an('Array');
        expect(users.error).to.be.null;
        
        if(users.data){
            users.data.forEach((user: any) => {
                console.log(user);
            });
        }
       
    })
})
describe('API REST post Role', () => {
    it('POST', async () => {
        let user: User = new User();
  
        console.log("Get role from API REST post Role");
        let getResponse =  await fetch(url+'/1');
       
        let dataResponse: IResponseData = await getResponse.json()

        console.log(dataResponse.data);

        let role  = <Role> dataResponse.data
       
        user.username = "testuser";
        user.firstName = "testFirstName";
        user.lastName = "testLastName";
        user.password = "testPassword";
        user.createdAt = new Date();
        user.updateAt = new Date();
        user.role = role

        console.log(user);
        
        const postResponse = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:JSON.stringify(user)
        });

        expect(postResponse.status).to.be.equal(201);

    })
})

