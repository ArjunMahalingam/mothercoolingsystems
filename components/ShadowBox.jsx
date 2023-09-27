import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export const ShadowBox = () => {
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
    <>
      <div>
        <section className="headimg">
          <img src={require("../Images/SplitAC.jpg")} alt="" className="img1" />
        </section>
        <img src={require("../Images/logo.png")} alt="" className="img2" />
      </div>
      <div>
        <section className="leftbox">
          <p>
            <h3>
              Meet <span className="mcstitle">Mother Cooling systems</span>
            </h3>
          </p>
          <h5>
            We pride ourself on being a one stop shop for All Brand AC Repair &
            Maintenance Service that is able to meet all of our client’s needs.
            Our goal is to provide the highest quality Air Conditioning Repair &
            Maintenance, AC installation, AC Uninstallation, AC AMC services, on
            schedule, and on budget along with outstanding customer service in
            Pondicherry. We understand that time and cost are crucial so we
            strive to go above and beyond our client’s expectations. We are
            specialized in Daikin, Voltas, LG, Blue Star, Haier, Onida, Samsung
            AC Servicing in Pondicherry. For our customers peace of mind, we
            offer valuable money saving service and AC maintenance contracts. We
            are one of the best HVAC Contactor in Pondicherry. Please call for
            additional details.
          </h5>
        </section>
        <div>
          <section className="Enquiry1">
            <h4>
              Schedule an <span className="Appoint">Appointment</span>
            </h4>
            <div className="form1">
              <form action="">
                <div>
                  <label htmlFor="Name"></label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <label htmlFor="Email"></label>
                <input type="mail" placeholder="Your Mail ID" />
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
                        Make sure that you avoid including any sensitive
                        information that you dont want to share with this
                        business
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
