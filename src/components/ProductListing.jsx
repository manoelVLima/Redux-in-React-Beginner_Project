import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../redux/actions/productAction";
import "./ProductListing.css";

function ProductListing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);
  
  return (
    <div id="title-container" className="ui grid container">
      <Product />
    </div>
  );
}

export default ProductListing;
