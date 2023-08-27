import React, {useEffect, useState} from "react";
import axios from "axios";
import "./extrainput.css";

import { AiFillDelete } from "react-icons/ai";
import CustomInput from "../../widget/inputpage/custominput";
import BannerInput from "../bannerinput/bannerinput";
import { getCategory, postCategory, deleteCategory } from "../../actions/category";
import { getMelting, postMelting, deleteMelting } from "../../actions/melting";
import { useSelector, useDispatch } from "react-redux";

const ExtraInput = () => {
  const [categoryData, setCategoryData] = useState({
    category_name: ""
  })
  const [imagedata, setImageData] = useState("");
  const [meltingData, setMeltingData] = useState({
    melting: "",
  });
  const category = useSelector((state) => state.category);
  const melting = useSelector((state) => state.melting);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCategory());
      dispatch(getMelting());
    }, [dispatch]);

    const handleCategorySubmit = async (e) => {
       e.preventDefault();
           const data = new FormData();

    data.append("file", imagedata);
    data.append("upload_preset", "bharatijew");
    data.append("cloud_name", "drrvji8p8");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drrvji8p8/image/upload",
        data
      );

      const formproductdata = {
        category_image: response.data.secure_url,
        category_name: categoryData.category_name
      };

      dispatch(postCategory(formproductdata));
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
    }
    const handleMeltingSubmit = (e) => {
       e.preventDefault();
      dispatch(postMelting(meltingData))
    }
  return (
    <div className="extrainput-container section__padding flex__center">
      <div className="extrainput-container_card">
        <div className="extrainput-container_card-title">
          <h2>Add Category</h2>
          <form id="form-category" onSubmit={handleCategorySubmit}>
              <input type="file" onChange={(e) => setImageData(e.target.files[0])}  />
            <div className="extrainput-container_card-input">
              <CustomInput
                placeholder="Add Category"
                onchange={(e) =>
                  setCategoryData({
                    ...categoryData,
                    category_name: e.target.value,
                  })
                }
              />
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        <div className="extrainput-container_card-lists">
          {category.map((item) => (
            <div key={item._id} className="category_list">
              <p>{item.category_name}</p>
              <AiFillDelete
                className="icon-delete"
                onClick={() => dispatch(deleteCategory(item._id))}
                size={20}
              />
            </div>
          ))}
        </div>
      </div>
      <BannerInput />
      <div className="extrainput-container_card">
        <div className="extrainput-container_card-title">
          <h2>Add Melting</h2>
          <form id="form-category" onSubmit={handleMeltingSubmit}>
            <div className="extrainput-container_card-input">
              <CustomInput
                placeholder="Add Melting"
                onchange={(e) =>
                  setMeltingData({
                    ...meltingData,
                    melting: e.target.value,
                  })
                }
              />
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        <div className="extrainput-container_card-lists">
          {melting.map((item) => (
            <div key={item._id} className="category_list">
              <p>{item.melting}</p>
              <AiFillDelete className="icon-delete" size={20} onClick={() => dispatch(deleteMelting(item._id))} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraInput;
