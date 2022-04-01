export interface Message {
    success: boolean;
    message: string;
};

export class LoginMessage implements Message {
    success: boolean;
    message: string;
    is_admin: boolean;
    constructor(success: boolean, message: string, is_admin: boolean) {
        this.success = success;
        this.message = message;
        this.is_admin = is_admin;
    };
};

export interface User {
    last_name: string;
    first_name: string;
    email: string;
    password_hash: string | undefined;
    phone_number: string;
    company_name: string;
    is_admin: boolean;
};

export interface Product {
    prod_name: string;
    prod_cost: number;
    prod_description: string
};

export interface Order {
    user_id: number;
    product_id: number;
    order_date: string;
};
