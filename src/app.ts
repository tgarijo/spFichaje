
// Application = interface
import express, { Application } from 'express';

import * as bodyParser from "body-parser";
import morgan from 'morgan';
import "reflect-metadata";

import indexRoute from './routes/index.routes';
import companyRoute from './routes/company.routes'

import { Database } from './database';



export  class App {

    private app:  Application;
    
    
    // private port tiene alcance a toda la clase
    // y evitamos declararla como app
    constructor(private port?: number | string) 
    { 
        this.app = express();
        this.settings();
        this.middlewares();

        // Always before routes
        this.bodyParsec();
      
        this.routes();
        
        
    }


    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);        
    }

    private bodyParsec(){
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }))

        // parse application/json
        this.app.use(bodyParser.json());
    }

    private middlewares() {
        this.app.use(morgan('dev'));
    }

    private routes() {
        this.app.use(indexRoute);
        this.app.use(companyRoute);
    }

    public async database() {
        const database =  require ('./database');

        const connection = await new Database().connect();

        this.app.set('connection', connection);
        //console.log(connection);
        
    }

    async listen(){
        await this.app.listen(this.app.get('port')); // espera a terminar ejecucion imprime console.log
        console.log(`Server on port ${this.app.get('port')}`);
    }
}