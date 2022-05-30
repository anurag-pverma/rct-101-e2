import React, { useState } from "react";


const AddProduct = () => {
 const [button, setButton]= useState(false);
const handleClick=()=>{
setButton(true);
}

  return (
    <>
    {
      button ? (
        <button onClick={handleClick} style={{ height:"60px",
        width:"200px",
        backgroundColor:"grey",
        margin:"100px",
        padding:"20px"}} >Add New Product</button>
      ) : ( 

        <>
        <div>
          <h1> Add New Product</h1> <br />
          <label htmlFor="">Title</label><br />
          <input type="text" placeholder=" title"  /><br />
          <label for="product">Category</label>
            <input list="product" name="product" id="product"/>
            <datalist id="product">
              <option value="Shirt"/>
              <option value="Jeans"/>
              <option value="Pant"/>
              
            </datalist>
            <button>submit</button>

          <label htmlFor="">Gender</label><br />
          <input type="radio" /><label htmlFor="">Male</label>
          <input type="radio" /><label htmlFor="">Female</label>
          <input type="radio" /><label htmlFor="">Unisex</label>

          <label htmlFor=""> Price</label><br />
          <input type="number" name="" id="" />

          
        </div>
        </>

      )
    }
    

    </>
  );
};

export default AddProduct;
