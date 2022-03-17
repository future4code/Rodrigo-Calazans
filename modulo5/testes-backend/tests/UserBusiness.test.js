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
Object.defineProperty(exports, "__esModule", { value: true });
const tokenGeneratorMock_1 = require("./mocks/tokenGeneratorMock");
const idGeneratorMock_1 = require("./mocks/idGeneratorMock");
const hashGeneratorMock_1 = require("./mocks/hashGeneratorMock");
const userDataBaseMock_1 = require("./mocks/userDataBaseMock");
const UserBusiness_1 = require("../src/business/UserBusiness");
const userBusinessMock = new UserBusiness_1.UserBusiness(new idGeneratorMock_1.IdGeneratorMock(), new hashGeneratorMock_1.HashGeneratorMock(), new tokenGeneratorMock_1.TokenGeneratorMock(), new userDataBaseMock_1.UserDataBaseMock());
describe("teste de signUp", () => {
    test("Erro que deve retornar quando o nome está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            yield userBusinessMock.signup("", "email@email.com", "123", "ADMIN");
        }
        catch (e) {
            expect(e.message).toEqual("Missing input");
            expect(e.statusCode).toBe(422);
        }
    }));
    test("Erro que deve retornar quando o email é inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            yield userBusinessMock.signup("flavio", "email", "123", "ADMIN");
        }
        catch (e) {
            expect(e.message).toEqual("Invalid email");
            expect(e.statusCode).toBe(422);
        }
    }));
    test("Erro que deve retornar quando a senha é inválida", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            yield userBusinessMock.signup("flavio", "email@email.com", "12345", "ADMIN");
        }
        catch (e) {
            expect(e.message).toEqual("Invalid password");
            expect(e.statusCode).toBe(422);
        }
    }));
    test("Erro que deve retornar quando o tipo de usuário é inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            yield userBusinessMock.signup("flavio", "email@email.com", "123456", "adm");
        }
        catch (e) {
            expect(e.message).toEqual("Invalid user role");
            expect(e.statusCode).toBe(422);
        }
    }));
    test("Sucesso no cadastro e verificação do token de acesso", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            const accessToken = yield userBusinessMock.signup("astsdrodev", "astrodev@gmail.com", "astrodev123", "ADMIN");
            expect(accessToken).toEqual({ "accessToken": "token_mockado" });
        }
        catch (e) {
            console.log(e);
        }
    }));
});
describe("teste de login", () => {
    test("Erro que deve retornar quando o email fornecido não existe", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            yield userBusinessMock.login("flavio@email.com", "email");
        }
        catch (e) {
            expect(e.message).toEqual("Invalid credentials");
            expect(e.statusCode).toBe(401);
        }
    }));
    test("Erro que deve retornar quando a senha está errada", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            yield userBusinessMock.login("astrodev@gmail.com", "senhaErrada");
        }
        catch (e) {
            expect(e.message).toEqual("Invalid credentials");
            expect(e.statusCode).toBe(401);
        }
    }));
    test("Sucesso no login e verificação do token de acesso", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            const result = yield userBusinessMock.login("astrodev@gmail.com", "astrodev123");
            expect(result).toEqual({ "accessToken": "token_mockado" });
        }
        catch (e) {
            console.log(e);
        }
    }));
});
//# sourceMappingURL=UserBusiness.test.js.map