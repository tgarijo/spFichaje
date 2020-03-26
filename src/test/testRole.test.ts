
//import assert from  'assert';
import request = require("supertest");
import {App} from '../app';

var url ="http://localhost:3000/role";

describe ('Role',()=> {
    describe('GET', ()=> {
        it('Should return json as default data format', function(done){
            request(App).get(url)
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    })
})

