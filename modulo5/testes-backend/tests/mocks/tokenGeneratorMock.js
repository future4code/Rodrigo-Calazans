"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGeneratorMock = void 0;
const User_1 = require("../../src/model/User");
class TokenGeneratorMock {
    constructor() {
        this.generate = (input) => {
            return "token_mockado";
        };
    }
    verify(token) {
        return {
            id: "id_mockado",
            role: User_1.USER_ROLES.NORMAL
        };
    }
}
exports.TokenGeneratorMock = TokenGeneratorMock;
//# sourceMappingURL=tokenGeneratorMock.js.map