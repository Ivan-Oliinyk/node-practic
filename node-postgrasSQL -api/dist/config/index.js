"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const dataBase_1 = __importDefault(require("./dataBase"));
exports.default = {
    PORT: process.env.PORT || 8080,
    SERVER_URL: "http://" + process.env.SERVER_HOST + process.env.PORT,
    DB: dataBase_1.default,
};
//# sourceMappingURL=index.js.map