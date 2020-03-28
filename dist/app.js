"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("reflect-metadata");
const index_routes_1 = require("./routes/index.routes");
const database_1 = require("./database");
class App {
    // private port tiene alcance a toda la clase
    // y evitamos declararla como app
    constructor(port) {
        this.port = port;
        //options for cors midddleware
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            //origin: API_URL,
            preflightContinue: false
        };
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        // Always before routes
        this.bodyParsec();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    bodyParsec() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default(this.options));
        this.app.use(helmet_1.default());
    }
    routes() {
        let router = new index_routes_1.indexRouter(this.app);
        router.setRouter();
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("starting database instace...");
            //const database =  require ('./database');
            const connection = yield new database_1.Database().connect();
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port')); // espera a terminar ejecucion imprime console.log
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map