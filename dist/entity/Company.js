"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Company = class Company {
    constructor() { }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 200,
        nullable: false
    }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], Company.prototype, "image", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.id),
    __metadata("design:type", User_1.User)
], Company.prototype, "user", void 0);
Company = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], Company);
exports.Company = Company;
//# sourceMappingURL=Company.js.map