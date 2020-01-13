class ProductDescription {

    constructor({id, colour, name, price, img}, quantity = 0) {
        this.id = id;
        this.colour = colour;
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
    }
}

export default ProductDescription;