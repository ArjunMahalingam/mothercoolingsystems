import react from "react";
import logonew from "../Images/logonew.png";
import { FaDirections, FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";

let Container = () => {
  return (
    <div className="header">
      <div className="lefthead">
        <Link to={`Home`}>
          <img
            src={logonew}
            alt=""
            className="logo"
            onClick={() => {
              window.location.href = "http://localhost:3000/";
            }}
          />
        </Link>

        <Link to={`Home`}>
          <img
            src={require("../Images/mcslogo1.png")}
            alt=""
            className="title"
            onClick={() => {
              window.location.href = "http://localhost:3000/";
            }}
          />
        </Link>
      </div>
      <div className="righthead">
        <Link to={`https://web.whatsapp.com/`} target="blank">
          <img
            src={require("../Images/whatsapp_icon.png")}
            alt="+91 8098865825"
          />
          +91 8098865825
        </Link>
        <Link to={`/GetQuote`}>
          <FaReceipt className="quote"></FaReceipt>Get Quote
        </Link>
        <Link
          to={`https://www.google.com/maps/dir//Mother+Cooling+System/@11.9562839,79.7523139,27600m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3a549ff736c3880b:0xd0bf26af7c2fcf28!2m2!1d79.8347158!2d11.9562959?entry=ttu`}
          target="blank"
        >
          <FaDirections className="direction"></FaDirections>
          Get Direction
        </Link>
      </div>
    </div>
  );
};
export default Container;
