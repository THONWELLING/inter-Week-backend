"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../resources/user/user.controllers");
const userRouter = (0, express_1.Router)();
const userController = new user_controllers_1.UserController();
userRouter.post('/signin', userController.signin);
userRouter.post('/signup', userController.signup);
exports.default = userRouter;
