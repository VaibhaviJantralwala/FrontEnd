class Product{
    showProduct(product){
        console.log("Product List : ");
    }
}
class Mobile extends Product{
    showProduct(product){
        super.showProduct();
        console.log("Available mobiles : ");

        product.forEach((value)=>{
            console.log(value);
        })
    }
}

let mobile = ["Samsung","Apple","nokia"]
const m = new Mobile();
m.showProduct(mobile);