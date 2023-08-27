import React, { useEffect, useState } from "react";
import "./header.css";
import { MdCancel } from "react-icons/md";
import CustomCard from "../../widget/custom_card/customcard";
import CustomInput from "../../widget/inputpage/custominput";
import { getCategory } from "../../actions/category";
import { getProducts } from "../../actions/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getlivegoldrate,
  getlivesilverrate,
  postlivegoldrate,
  postlivesilverrate,
  deletelivegoldrate,
  deletelivesilverrate,
} from "../../actions/liverate.js";
import { useSelector, useDispatch } from "react-redux";



const Header = () => {
  const [liveGoldRate, setLiveGoldRate] = useState({
    goldRateofseven: "",
    goldRateofnine: "",
  });
  const [liveSilverRate, setLiveSilverRate] = useState({
    silverRate: "",
  });
  const products = useSelector((state) => state.products)
  const category = useSelector((state) => state.category);
  const goldrate = useSelector((state) => state.goldrate);
  const silverrate = useSelector((state) => state.silverrate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts())
    dispatch(getlivegoldrate());
    dispatch(getlivesilverrate());
  }, [dispatch]);

  const handlegoldliverate = (e) => {
    e.preventDefault();
    if (
      liveGoldRate.goldRateofnine === "" ||
      liveGoldRate.goldRateofseven === ""
    ) {
      toast.warning("please add input");
    } else {
      dispatch(postlivegoldrate(liveGoldRate));
    }
  };
  const handlesilverliverate = (e) => {
    e.preventDefault();
    if (liveSilverRate.silverRate === "") {
      toast.warning("Please Add Input");
    } else {
      dispatch(postlivesilverrate(liveSilverRate));
    }
  };
  return (
    <div className="header-container flex__center section__padding">
      <div className="header-container-data">
        <CustomCard title="Total Products" totalnumber={products.length} />
        <CustomCard title="Total Categories" totalnumber={category.length} />
      </div>
      <div className="header-container_rate">
        <div className="header-container_rate-gold">
          <div className="header-container_rate-gold_title">
            <p>Gold Rate</p>
          </div>
          <div className="header-container_rate-gold_footer">
            <CustomInput
              cssproperty="no_margin"
              placeholder="Add 75 Rate"
              onchange={(e) =>
                setLiveGoldRate({
                  ...liveGoldRate,
                  goldRateofseven: e.target.value,
                })
              }
            />
            <CustomInput
              cssproperty="no_margin"
              placeholder="Add 916 Rate"
              onchange={(e) =>
                setLiveGoldRate({
                  ...liveGoldRate,
                  goldRateofnine: e.target.value,
                })
              }
            />
            <button onClick={handlegoldliverate}>Submit</button>
          </div>
          <div className="header-container_tags">
            {goldrate.map((item) => (
              <div key={item._id} className="header_tag">
                <p>75: {item.goldRateofseven}</p>
                <p>916: {item.goldRateofnine}</p>
                <MdCancel
                  onClick={() => dispatch(deletelivegoldrate(item._id))}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="header-container_rate-gold">
          <div className="header-container_rate-gold_title">
            <p>Silver Rate</p>
          </div>
          <div className="header-container_rate-gold_footer">
            <CustomInput
              cssproperty="no_margin"
              placeholder="Add Silver Rate"
              onchange={(e) =>
                setLiveSilverRate({
                  ...liveSilverRate,
                  silverRate: e.target.value,
                })
              }
            />
            <button onClick={handlesilverliverate}>Submit</button>
          </div>
          <div className="header-container_tags">
            {silverrate.map((item) => (
              <div key={item._id} className="header_tag">
                <p>{item.silverRate}</p>
                <MdCancel
                  onClick={() => dispatch(deletelivesilverrate(item._id))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
