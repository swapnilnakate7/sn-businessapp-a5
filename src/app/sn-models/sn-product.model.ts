export class Product {
    public title: string;
    public price: number;
    public description: string;

    constructor(title: string, price: number, description: string) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
}
