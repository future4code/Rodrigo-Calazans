"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMock2 = exports.userMock = void 0;
const User_1 = require("../../src/model/User");
exports.userMock = new User_1.User("id_mockado", "astrodev", "astrodev@gmail.com", "astrodev123", User_1.USER_ROLES.ADMIN);
exports.userMock2 = new User_1.User("id_mockado_2", "astrodev2", "astrodev2@gmail.com", "astrodev123", User_1.USER_ROLES.NORMAL);
//# sourceMappingURL=userMock.js.map