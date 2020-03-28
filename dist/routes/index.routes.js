"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_routes_1 = __importDefault(require("./company.routes"));
const role_routes_1 = __importDefault(require("./role.routes"));
const router = express_1.Router();
class indexRouter {
    constructor(App) {
        this.app = App;
    }
    // Setting routes
    setRouter() {
        this.app.use(company_routes_1.default);
        this.app.use(role_routes_1.default);
    }
}
exports.indexRouter = indexRouter;
exports.default = router;
//# sourceMappingURL=index.routes.js.map