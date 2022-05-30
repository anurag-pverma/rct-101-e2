import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {

  const [listOfProduct, setListOFProduct] = useState([]);
  const url = `http://localhost:8080/products`;


  
  useEffect(()=>{
    axios.get(url)
    .then(res=>{
      // console.log(res);
      setListOFProduct(res.data);
    })
  },[])
  // TODO: Remove below const and instead import them from chakra


  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <>
      {
        listOfProduct &&  listOfProduct.map ((product,index)=>{
          return <div key={index} style={{ display:"grid"}}>
            <div> 
              
               <img src={product.imageSrc} alt="" /> 

               <p>{product.category}</p>
               <p>{product.price}</p>
               <p>{product.title}</p>
               <p>{product.gender}</p>

            </div>

          </div>
        })
        // console.log(listOfProduct)

        // category: "pant"
// gender: "male"
// id: 1
// imageSrc: "https://picsum.photos/seed/picsum6/420/260"
// price: "23.00"
// title: "react tshirt"
      }
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
    </>
  );
};

export default Product;
