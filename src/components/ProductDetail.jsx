import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetail.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeSelectedProduct } from "../redux/actions/productAction";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  console.log(product);
  const { description, title, image, price, category } = product;
  const { id } = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (id && id !== "") dispatch(fetchProduct(id));
    return () => dispatch(removeSelectedProduct())
  }, [id]);

  return (
    <div id="container" className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div id="loading-card">...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img id="image-card" className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
