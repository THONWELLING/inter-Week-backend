"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const globalErrors_1 = require("./middlewares/globalErrors");
const routes_1 = __importDefault(require("./routes"));
(0, typeorm_1.createConnection)().then(connection => {
    const app = (0, express_1.default)();
    const PORT = 3333;
    app.use(express_1.default.json());
    app.use(routes_1.default);
    app.use(globalErrors_1.GlobalErrors);
    app.listen(PORT, () => {
        return console.log(`Server is Running At http://localhost: ${PORT}`);
    });
}).catch((error) => {
    console.log('Unable To Connect To The Database', error);
});
