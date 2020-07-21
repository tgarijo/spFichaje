import { expect } from "chai";
import fetch from 'node-fetch';
import { User } from "../entity/User";
import { IResponseData } from "../utils/IResponseData";


const baseUrl : string = "http://localhost:3000"
const userUrl: string = `${baseUrl}/login` //"http://localhost:3000/user";
const userUrlAuth: string = `${baseUrl}/auth-user` //"http://localhost:3000/user";


const timeOutValue : number = 10000000;

console.log("Getting auth")
console.log("-----------------------")

describe('Auth  Test', () => {
    it('Get Token', async () => {

        let  {postResponse} : IData =  await login();

        expect( postResponse.status).to.be.equal(201);
 

    }).timeout(timeOutValue);
   
    it.only('Login by token', async () => {

        let postResponse : IData  = await login();
        let { data } :IData =await login();
        let token = data.data
        console.log(token);
        
        const userId = 1;

        const templateUser = `${userUrlAuth}/${userId}`
        console.log(templateUser)

        const response = await fetch(templateUser, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                 'auth': `${token}`
                }
        });
       
        let  data1  : IResponseData = await response.json() as IResponseData;

        console.log(data1);
        // expect(response.status).to.be.equal(200);

    }).timeout(timeOutValue)
})

const login = async  () => {
    const user: User = new User();

    user.username = "tgarijo";
    
    user.password = "user_p";
    //user.email = 'pepito@pepito.es';
    //user.isActive = true;

    const postResponse = await fetch(userUrl,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(user)
    });

    const data : IResponseData = await postResponse.json() as IResponseData;
    
    const response : IData = {data, postResponse}
  
    return response;
}



interface IData {
    data: IResponseData, 
    postResponse: any
}