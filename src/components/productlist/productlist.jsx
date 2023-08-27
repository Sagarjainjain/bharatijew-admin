import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "./productlist.css";
import ProductCard from "../../widget/productcard/productcard";
import { getProducts } from "../../actions/products";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemsPerPage = 5;
// pagination

const [itemOffset, setItemOffset] = useState(0);
const endOffset = itemOffset + itemsPerPage;
const currentItems = products.slice(itemOffset, endOffset);
const pageCount = Math.ceil(products.length / itemsPerPage);
const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % products.length;

  setItemOffset(newOffset);
};


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="productlist-container section__padding">
      <div className="productLlist_header">
        <h1>List Of Product</h1>
        <button onClick={() => navigate("/admin/add")}>
          <IoIosAddCircle size={20} style={{ textAlign: "center" }} /> Add a new
          Product
        </button>
      </div>
      <div className="productlist_footer">
        <ProductCard products={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextClassName="page-num"
        activeClassName="active"

      />
    </div>
  );
};

export default ProductList;
