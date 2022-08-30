import { RowDataPacket } from "mysql2";

interface IProduct extends RowDataPacket {
    id?: number;
    name: string;
    brand: string;
    price: number;
    unit: boolean;
    created_at: Date;
    updated_at: Date;
};

export { IProduct } ;