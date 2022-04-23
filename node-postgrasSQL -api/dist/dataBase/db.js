"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const config_1 = __importDefault(require("../config"));
const { DB: { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER }, } = config_1.default;
const pool = new pg_1.default({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
});
//# sourceMappingURL=db.js.map