"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const md5_1 = __importDefault(require("crypto-js/md5"));
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entity/User");
const auth_1 = __importDefault(require("../../config/auth"));
const AppError_1 = __importDefault(require("../../shared/error/AppError"));
class UserService {
    signin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositiry = (0, typeorm_1.getRepository)(User_1.User);
            const { email, password } = user;
            const passwordHash = (0, md5_1.default)(password).toString();
            const existUser = yield userRepositiry.findOne({ where: { email, password } });
            if (!existUser) {
                throw new AppError_1.default('User Not Found', 401);
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({
                firstName: existUser.firstName,
                lastName: existUser.lastName,
                accountNumber: existUser.accountNumber,
                accountDigit: existUser.accountDigit,
                wallet: existUser.wallet
            }, secret, {
                subject: existUser.id,
                expiresIn,
            });
            //@ts-expect-error ignore
            delete existUser.password;
            return { accessToken: token };
        });
    }
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepositiry = (0, typeorm_1.getRepository)(User_1.User);
            const existUser = yield userRepositiry.findOne({ where: { email: user.email } });
            if (existUser) {
                throw new AppError_1.default('There Is Already a Registered User With This Email', 401);
            }
            const userData = Object.assign(Object.assign({}, user), { password: (0, md5_1.default)(user.password).toString(), wallet: 6000, accountNumber: Math.floor(Math.random() * 999999), accountDigit: Math.floor(Math.random() * 99) });
            const userCreate = yield userRepositiry.save(userData);
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({
                firstName: user.firstName,
                lastName: user.lastName,
                accountNumber: userData.accountNumber,
                accountDigit: userData.accountDigit,
                wallet: userData.wallet
            }, secret, {
                subject: userCreate.id,
                expiresIn,
            });
            return { accessToken: token };
        });
    }
}
exports.default = UserService;
