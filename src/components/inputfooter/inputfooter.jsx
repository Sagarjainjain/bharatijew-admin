import React, {useEffect, useState} from 'react';
import "./inputfooter.css";
import { AiFillDelete } from "react-icons/ai";
import CustomInput from "../../widget/inputpage/custominput";
import TopPost from '../top-post/top_post';
import { getSubCategory, postSubCategory, deleteSubCategory } from "../../actions/subcategory";

import { useSelector, useDispatch } from "react-redux";

const InputFooter = () => {
  const [subcatgeoryData, setSubCategoryData] = useState({
    subcategory_name: ""
  });
    const subcategory = useSelector((state) => state.subcategory);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getSubCategory());
    }, [dispatch]);

    const handlesubcategorysubmit = (e) => {
      e.preventDefault()
      dispatch(postSubCategory(subcatgeoryData))
    }
  return (
    <div className="inputfooter-container section__padding flex__center">
      <div className="inputfooter-container_card">
        <div className="inputfooter-container_card-title">
          <h2>Add Sub-Category</h2>
          <form id="form-category" onSubmit={handlesubcategorysubmit}>
            <div className="extrainput-container_card-input">
              <CustomInput
                placeholder="Add Melting"
                onchange={(e) =>
                  setSubCategoryData({
                    ...subcatgeoryData,
                    subcategory_name: e.target.value,
                  })
                }
              />
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        <div className="inputfooter-container_card-lists">
          {subcategory.map((item) => (
            <div key={item._id} className="category_list">
              <p>{item.subcategory_name}</p>
              <AiFillDelete className="icon-delete" size={20} onClick={() => dispatch(deleteSubCategory(item._id))} />
            </div>
          ))}
        </div>
      </div>
      <TopPost />
    </div>
  );
}

export default InputFooter