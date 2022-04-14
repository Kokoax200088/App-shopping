export class ClothesModel{
    public id: number;
    public title: string;
    public price: string;
    public category: string;
    public description: string;
    public image: string;

    constructor(id:number, title: string, price: string, category: string, desc: string, image:string){
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = desc;
        this.image = image;
    }
}