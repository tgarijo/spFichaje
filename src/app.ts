
import express, { Application } from 'express';

import * as bodyParser from "body-parser";

import helmet from "helmet";
import cors from "cors";

import morgan from 'morgan';
import "reflect-metadata";

import { indexRouter} from './routes/index.routes';
import { Database } from './database';

export  class App {

    //options for cors midddleware
    private options:cors.CorsOptions = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        //origin: API_URL,
        preflightContinue: false
    };
    
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
        this.app.use(cors(this.options));
        this.app.use(helmet());
    }

    private routes() {
        let router = new indexRouter(this.app);
        router.setRouter();
    }

    public async database() {
        console.log("starting database instace...");
        //const database =  require ('./database');
        const connection = await new Database().connect();        
    }

    async listen(){
        await this.app.listen(this.app.get('port')); // espera a terminar ejecucion imprime console.log
        console.log(`Server on port ${this.app.get('port')}`);
    }
}