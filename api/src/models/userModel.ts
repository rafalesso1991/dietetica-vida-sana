import { RowDataPacket } from "mysql2";

interface IUser extends RowDataPacket {
    id?: number;
    username: string;
    email: string;
    password: string;
    admin: boolean;
    created_at: Date;
    updated_at: Date;
    jwt: string;
    expiration: Date;
};

export { IUser } ;

