import React, { useEffect, useState } from "react";
import "./addproduct.css";
import { FcCamera } from "react-icons/fc";
import CustomInput from "../../widget/inputpage/custominput";
import { getCategory } from "../../actions/category";
import { getSubCategory } from "../../actions/subcategory";
import { getMelting } from "../../actions/melting";
import { postProducts } from "../../actions/products";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const category = useSelector((state) => state.category);
  const subcategory = useSelector((state) => state.subcategory);
  const melting = useSelector((state) => state.melting);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagedata, setImageData] = useState("");
  const [fileName, setFileName] = useState("No selected file");
  const [productdata, setProductData] = useState({
    image: "",
    category: "",
    subcategory: "",
    melting: "",
    weight: "",
  });

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSubCategory());
    dispatch(getMelting());
  }, [dispatch]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (
      (productdata.category === "" ||
        productdata.melting === "" ||
        productdata.subcategory === "",
      productdata.weight === "")
    ) {
      toast.warning("Input Field can't be Empty");
    } else {
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
          image: response.data.secure_url,
          category: productdata.category,
          subcategory: productdata.subcategory,
          melting: productdata.melting,
          weight: productdata.weight,
        };
        dispatch(postProducts(formproductdata));
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="addproduct-container  flex__center">
      <div className="addproduct-card">
        <h2>Add New Product</h2>
        <form className="form-add-product">
          {image ? (
            <div className="image-showcase">
              <img src={image} alt={fileName} />
            </div>
          ) : (
            <div
              className="input-file-container"
              onClick={() => document.querySelector(".input-file").click()}
            >
              <div className="input-file-container_title">
                <p>Brower files</p>
                <FcCamera />
              </div>
              <input
                type="file"
                className="input-file"
                hidden
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                    setImageData(files[0]);
                  }
                }}
              />
            </div>
          )}
          <div className="select-input">
            <p>Add Category</p>
            <select
              name="category"
              id="category"
              onChange={(e) =>
                setProductData({ ...productdata, category: e.target.value })
              }
            >
              {category.map((item) => (
                <option
                  key={item._id}
                  defaultValue={item[0]}
                  value={item.category_name}
                >
                  {item.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="select-input">
            <p>Add Sub-Category</p>
            <select
              name="category"
              id="category"
              onChange={(e) =>
                setProductData({
                  ...productdata,
                  subcategory: e.target.value,
                })
              }
            >
              {subcategory.map((item) => (
                <option key={item._id} value={item.subcategory_name}>
                  {item.subcategory_name}
                </option>
              ))}
            </select>
          </div>
          <div className="select-input">
            <p>Add Melting</p>
            <select
              name="melting"
              id="melting"
              onChange={(e) =>
                setProductData({ ...productdata, melting: e.target.value })
              }
            >
              {melting.map((item) => (
                <option key={item._id} value={item.melting}>
                  {item.melting}
                </option>
              ))}
            </select>
          </div>
          <CustomInput
            placeholder="Add Weight"
            onchange={(e) =>
              setProductData({ ...productdata, weight: e.target.value })
            }
          />
          <button type="button" onClick={handlesubmit}>
            Add this Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
