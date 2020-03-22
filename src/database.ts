import { createConnection, Connection } from "typeorm";

export  class Database {

    constructor(){
        
    }

    private connection: Connection;

    public async connect ()  {

        return  await createConnection();
              
    }
   
    
    public getConnection() :Connection {
        console.log('getConnection');
        return this.connection;
    }
    
} 


