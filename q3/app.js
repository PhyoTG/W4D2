const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(session ({
    secret: "W4D2"
}));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const Product = require('./models/product');

app.get("/", (req, res) => {
    let pList = Product.getAllProducts();
    res.render('product', { products : pList});
});

app.post("/addToCart", (req, res) => {
    let pList = Product.getAllProducts().filter( x => x.id == req.body.id);
    if(!req.session.shoppingcart)  req.session.shoppingcart = [];
    req.session.shoppingcart.push(pList[0]);
    res.redirect("/shoppingcart");
});


app.get("/shoppingcart",(req, res) =>{
    let products= req.session.shoppingcart;  
    console.log("products",products);
     res.render("shoppingcart", {products: products})
 });


app.listen(3000);