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
describe('getUserById', () => {
    test('Exibe o erro quando o ID não existe', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            yield userBusinessMock.getUserById('abc');
        }
        catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe('User not found');
        }
    }));
    test('Deve retornar o respectivo usuário quando o id for registrado', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const getUserById = jest.fn((id) => userBusinessMock.getUserById(id));
            const result = yield getUserById('id_mock_admin');
            expect(getUserById).toHaveBeenCalledWith('id_mock_admin');
            expect(result).toEqual({
                id: 'id_mock_admin',
                name: 'astrodev',
                email: 'astrodev@gmail.com',
                role: 'ADMIN',
            });
        }
        catch (error) {
            console.log(error.message);
        }
    }));
});
//# sourceMappingURL=index.test.js.map