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
exports.UserDataBaseMock = void 0;
const userMock_1 = require("./userMock");
class UserDataBaseMock {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (email === "astrodev@gmail.com") {
                return userMock_1.userMock;
            }
            else if (email === "astrodev2@gmail.com") {
                return userMock_1.userMock2;
            }
            else {
                undefined;
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id === "id_mockado") {
                return userMock_1.userMock;
            }
            else if (id === "id_mockado_2") {
                return userMock_1.userMock2;
            }
            else {
                undefined;
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return [userMock_1.userMock, userMock_1.userMock2];
        });
    }
}
exports.UserDataBaseMock = UserDataBaseMock;
//# sourceMappingURL=userDataBaseMock.js.map