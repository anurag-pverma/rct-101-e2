import React from "react";

import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";


const Products = () => {
  // // TODO: Remove below const and instead import them from chakra

  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <>
      {/* <h1>hellohojoljljoljaohoj</h1> */}
        <AddProduct/>
      <Product/>

      {/* <Flex> */}
        {/*  AddProduct */}
        {/* <Grid>List of Products</Grid> */}
        {/* Pagination */}
        {/* <Pagination/> */}
      {/* </Flex> */}
    </>
  );
};

export default Products;
