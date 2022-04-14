import { ProductModel } from "./product.model";

export class CartModel{
    public id: number;
    public userId: number;
    public date: Date;
    public products: ProductModel[];

    constructor(id:number, userId: number, date: Date, products: ProductModel[]){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.products = products;
    }
}