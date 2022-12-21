let products = [
    {
        id:01,
        name:"Digital Paper Notebook",
        price: 25,
        description:"Lamy Digital Paper Notebook (ncode) Digital Writing - 810-black",
        image: ""
    },
    {
        id:02,
        name:"Smart Writing Paper Tablet",
        price: 50,
        description:"Moleskine Smart Writing Paper Tablet Black DotGrid",
        image:""
    },
    {
        id:03,
        name:"LCD Writing Tablet",
        price: 20,
        description:"LCD Digital Writing Tablet allows for endless creativity, learning, organization, and personal reflection.",
        image:""
    },
    {
        id:04,
        name:"smart nNotepad",
        price: 200,
        description:"Royole RoWrite, Your Smart Notepad",
        image:""
    }    
];

let cart = [];

class Product{
    constructor(id,name,price,description,image)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.image=image;
    }

    
    static getAllProducts(){
        return products;
    }

    static getProductById(id){
        return products[id];
    }

    static addToCart(id) {
        const order = cart.find(ord => ord.product.id === parseInt(id));
        if (order) {
            order.qty += 1;
        } else {
            cart.push({
                product: products[parseInt(id)],
                qty: 1
            });
        }
    }

    static removeItemFromCart(id){
        cart = cart.filter(
            ord => ord.product.id !== parseInt(id));
    }

    static getCart(){
        return cart;
    }
}

module.exports=Product;