import { User, VerifyPurchase } from './../src/index';
describe("teste de compra", () => {
    test("teste de verificação de saldo", () => {
        const user: User = {
            name: "Rodrigo",
            balance: 150
        }

        const result = VerifyPurchase(user, 50)

        expect(result).toEqual({
            name: "Rodrigo",
            balance: 100
        })
    })

    test("saldo igual ao valor da compra", () => {
        const user: User = {
            name: "Rodrigo",
            balance: 50
        }

        const result = VerifyPurchase(user, 50)

        expect(result).toEqual({
            name: "Rodrigo",
            balance: 0
        })
    })

    test("teste de verificação de saldo", () => {
        const user: User = {
            name: "Rodrigo",
            balance: 40
        }

        const result = VerifyPurchase(user, 50)

        expect(result).toBe(undefined)
    })
})