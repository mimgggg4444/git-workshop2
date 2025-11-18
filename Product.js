export class Product {
    #favoriteCount = 0;

    constructor ({name, description, price, tags = [], images = []}){
        this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
    }

    get favoriteCount(){
        return this.#favoriteCount;
    }

    favorite(){
        this.#favoriteCount +=1;
    }
}