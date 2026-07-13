import { useState } from "react";


const ProductForm = ({handleAddProduct}) => {
    const [ error , setError] = useState('')
    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        if(name.length === 0) {
            setError("please enter your name")
            return;
        }
        else if(price.length === 0){
            setError("Please fill the price field")
            return;
        }
        else if(price < 0){
            setError("Price can not negative")
            return;
        }
        else if(quantity.length === 0){
            setError("Please give a amount");
            return;
        }
        else if(quantity < 0){
            setError("Quantity can't negetive");
            return;
        }

        else{
            setError('')
        }

        const newProduct = {
            name, 
            price, 
            quantity
        }
        handleAddProduct(newProduct)
        
        
        
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text"  name="name" placeholder="Product Name"/> <br />
                <input type="text"  name="price" placeholder="Product Price"/> <br />
                <input type="text"  name="quantity" placeholder="Product Quantity"/> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: "red"}}><small> { error } </small></p>
        </div>
    );
};

export default ProductForm;