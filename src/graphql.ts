
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewProduct {
    title: string;
    price: number;
    qty: number;
    description?: Nullable<string>;
    category?: Nullable<string>;
}

export class Product {
    id: string;
    title: string;
    price: number;
    qty: number;
    description?: Nullable<string>;
    category?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllProducts(): Nullable<Product>[] | Promise<Nullable<Product>[]>;
}

export abstract class IMutation {
    abstract createProduct(input?: Nullable<NewProduct>): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class ISubscription {
    abstract addedProduct(title: string): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
