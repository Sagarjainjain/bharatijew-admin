import React from "react";
import { deleteProducts } from "../../actions/products";
import { useDispatch } from "react-redux";
import "./productcard.css";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <>
      {products.map((item) => (
        <div key={item._id} className="productcard">
          <div className="productcard-1">
            <div className="productcard-media">
              <img src={item.image} alt={item.category_type} />
            </div>
            <div className="productcard-title">
              <h3>Category: {item.category_type}</h3>
              <p>Weight: {item.weight} Grams</p>
            </div>
          </div>
          <div className="productcard-controls">
            {/* <button disabled>Update</button> */}
            <button onClick={() => dispatch(deleteProducts(item._id))}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
