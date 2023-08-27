import React, { useState, useEffect } from "react";
import "./top_post.css";
import { FcCamera } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { gettoppost, posttoppost, deletetoppost } from "../../actions/toppost";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import CustomInput from "../../widget/inputpage/custominput";

const TopPost = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [weight, setWeight] = useState("");
    const [imagedata, setImageData] = useState("");
  const toppost = useSelector((state) => state.toppost);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(gettoppost());
  }, [dispatch]);

  const handleupload = async (e) => {
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
        image: response.data.secure_url,
        weight: weight,
      };
      dispatch(posttoppost(formproductdata));
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="toppost-container">
      <div className="toppost-container_input">
        {image ? (
          <div className="toppost-image">
            <img src={image} alt={fileName} />
          </div>
        ) : (
          <div
            className="toppost-container_input-file"
            onClick={() =>
              document.querySelector(".input-file-toppost").click()
            }
          >
            <input
              type="file"
              className="input-file-toppost"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                 setImageData(files[0]);
                }
              }}
            />
            <div className="input-icon">
              <p>Brower files</p>
              <FcCamera />
            </div>
          </div>
        )}
        <div className="toppost-container_input-footer">
          <CustomInput
            cssproperty="no_margin"
            placeholder="Add Weight"
            onchange={(e) => setWeight(e.target.value)}
          />
          <button onClick={handleupload}>Submit</button>
        </div>
      </div>
      <div className="toppost-container_list">
        {toppost.map((item) => (
          <div key={item._id} className="toppost-container_list-card">
            <div className="toppost-container_list-card-cancel">
              <MdCancel className="cancel-icon-toppost" onClick={() => dispatch(deletetoppost(item._id))} />
            </div>
            <img src={item.image} alt="" />
            <div className="toppost-container_list-card-title">
              <p>{item.weight} gram</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPost;
