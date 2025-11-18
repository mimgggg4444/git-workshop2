import { Product } from "./Product";

export class ElectronicProduct extends Product{
    constructor({name, description, price, tags, images, manufacturer}){
        super({name, description, price, tags, images});
        this.manufacturer = manufacturer;
    }
}