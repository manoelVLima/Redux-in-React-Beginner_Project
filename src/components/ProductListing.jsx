import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productAction";
import "./ProductListing.css";
import axios from 'axios'
function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log('Error', err);
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
  },[]);
  console.log(products);
  return (
    <div id="title-container" className="ui grid container">
      <Product />
    </div>
  );
}

export default ProductListing;
