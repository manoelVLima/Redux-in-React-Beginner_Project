import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Product.css'
function Product() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map(({title, price, category, id, image}) => {
    return (
      <div id="product-card" className="three wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div  className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta ">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>
}

export default Product;
