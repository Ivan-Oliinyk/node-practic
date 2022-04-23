"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const { PORT, SERVER_URL } = config_1.default;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Helow !!!");
});
app.listen(PORT, () => {
    console.log(`
  \n server run on port: ${PORT} ...\n`, `${SERVER_URL} \n`);
});
//# sourceMappingURL=index.js.map