"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.post('/signin', (req, res) => {
    return res.send('Entrando Com o Usuário');
});
userRouter.post('/signin', (req, res) => {
    return res.send('Criando Com o Usuário');
});
exports.default = userRouter;
