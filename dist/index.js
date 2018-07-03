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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c, _d, _e;
require("reflect-metadata");
const JAVATYPE_SYMBOL = Symbol("javatype");
function javaType(type) {
    return (target, propertyKey, parameterIndex) => {
        if (Reflect.hasOwnMetadata(JAVATYPE_SYMBOL, target, propertyKey)) {
            const metadata = Reflect.getOwnMetadata(JAVATYPE_SYMBOL, target, propertyKey);
            metadata[parameterIndex] = type;
        }
        else {
            const metadata = [];
            metadata[parameterIndex] = type;
            Reflect.defineMetadata(JAVATYPE_SYMBOL, metadata, target, propertyKey);
        }
    };
}
class UserProvider {
    update(user) {
        return __awaiter(this, arguments, void 0, function* () {
            return this._ref.invoke('update', Array.from(arguments));
        });
    }
}
__decorate([
    __param(0, javaType({ "name": "com.dianwoba.redcliff.user.entity.DwdUser", "isPrimitive": false, "isArray": false, "isGeneric": false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = ((_a = ((_b = ((_c = ((_d = (typeof com !== "undefined" && com).dianwoba) && _d).redcliff) && _c).user) && _b).entity) && _a).DwdUser) === "function" && _e || Object]),
    __metadata("design:returntype", Promise)
], UserProvider.prototype, "update", null);
//# sourceMappingURL=index.js.map