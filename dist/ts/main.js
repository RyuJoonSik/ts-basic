"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brand_json_1 = __importDefault(require("../brand.json"));
const myBrand = brand_json_1.default;
console.log(typeof brand_json_1.default);
console.log(Object.keys(brand_json_1.default));
Object.keys(myBrand).forEach((key) => {
    console.log(myBrand[key]);
});
class AsyncService {
    baseUrl;
    getA() {
        return Promise.resolve("");
    }
}
let service = new AsyncService();
let result = service.getA();
