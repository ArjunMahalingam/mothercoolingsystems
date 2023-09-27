import React, { useState } from "react";
import "../Style/Quote.css";
import { FaInfoCircle } from "react-icons/fa";

export const Quote = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const handleMouseEnter = () => {
    setIsBlinking(true);
  };
  const handleMouseLeave = () => {
    setIsBlinking(false);
  };

  const submission = () => {
    alert(
      "Thank you for Submitting your details, will get back to you soon!!!"
    );
  };

  return (
    <div className="Enquiry">
      <h4>
        Schedule an <span className="Appoint">Appointment</span>
      </h4>
      <div className="form1">
        <form action="">
          <div>
            <label htmlFor="Name"></label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="Email"></label>
            <input type="mail" placeholder="Your Mail ID" />
          </div>
          <div>
            <label htmlFor="Phone"></label>
            <input type="tel" placeholder="Your Phone No" />
          </div>
          <div>
            <label htmlFor="Message"></label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit" onClick={submission}>
            SCHEDULE AN APPOINTMENT
          </button>
          <div
            className={`thinking-icon ${isBlinking ? "blinking" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaInfoCircle className="noteph"></FaInfoCircle>
            {isBlinking && (
              <div className="info-content">
                <p>
                  Make sure that you avoid including any sensitive information
                  that you dont want to share with this business
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
