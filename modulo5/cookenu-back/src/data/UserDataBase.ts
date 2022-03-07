import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
    public async findUserByEmail(email: string): User {
        try {
            const user = await BaseDatabase.connection(`lbn_user`)
            .select(`*`)
            .where({email})

        } catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}