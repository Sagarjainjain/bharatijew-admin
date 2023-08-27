import React, { useEffect, useState } from "react";
import { FcCamera } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getBanner, deleteBanner, postBanner } from "../../actions/banner";
import axios from "axios";

import "./bannerinput.css";

const BannerInput = () => {
  const banner = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imagedata, setImageData] = useState("");
  const [fileName, setFileName] = useState("No selected file");

  useEffect(() => {
    dispatch(getBanner());
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
        bannerimage: response.data.secure_url,
      };
      dispatch(postBanner(formproductdata));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bannerinput">
        {image ? (
          <div className="banner-image">
            <img src={image} alt={fileName} />
            <button onClick={handleupload}>Upload</button>
          </div>
        ) : (
          <div
            className="bannerinput-file_input"
            onClick={() => document.querySelector(".input-file").click()}
          >
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
            <div className="input-icon">
              <p>Brower files</p>
              <FcCamera />
            </div>
          </div>
        )}
        <div className="bannerinput-images">
          {banner.map((item) => (
            <div key={item._id} className="bannerinput-images-image">
              <img src={item.bannerimage} alt="data" />
              <MdCancel
                className="cancel-icon"
                size={25}
                color="#E34234"
                onClick={() => dispatch(deleteBanner(item._id))}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerInput;

// {
//   !this.state.image ? (
//     <div
//       className="bannerinput-file_input"
//       onClick={() => document.querySelector(".file-input-banner").click()}
//     >
//       <input
//         type="file"
//         className="file-input-banner"
//         hidden
//         onChange={({ target: { files } }) => {
//           files[0] && this.setState((this.state.fileimage = files[0].name));
//           if (files) {
//             this.setState(this.state.image(URL.createObjectURL(files[0])));
//           }
//         }}
//       />
// <div className="input-icon">
//   <p>Brower files</p>
//   <FcCamera />
// </div>
//     </div>
//   ) : (
//     <img src={this.state.image} height="20px" alt="data" />
//   );
// }
