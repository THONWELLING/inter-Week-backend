"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3333;
app.get('/', (req, res) => {
    res.send('Express + Typescript Server Testando  1,2,3');
});
app.listen(PORT, () => {
    return console.log(`Server is Running At http://localhost: ${PORT}`);
});
