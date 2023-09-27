import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <>
      <div className="option">
        <Link to={`About Us`}>
          <h3 className="Selection">About Us</h3>
        </Link>
        <Link to={`Residental Service`}>
          <div
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <h3>Residental Service</h3>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>AC General Service</p>
                <p>AC Installation</p>
                <p>AC Uninstallation</p>
                <p>AC Maintenance & Repair</p>
                <p>AC Gas Filling</p>
                <p>AC Water Wash</p>
              </div>
            )}
          </div>
        </Link>

        <Link to={`Commercial Service`}>
          <div
            className={`dropdown ${isDropdownOpen1 ? "open" : ""}`}
            onMouseEnter={toggleDropdown1}
            onMouseLeave={toggleDropdown1}
          >
            <h3>Commercial Service</h3>
            {isDropdownOpen1 && (
              <div className="dropdown-content">
                <p>HVAC Annual Maintenance</p>
                <p>Casette AC Repair</p>
                <p>Tower AC Repair</p>
                <p>Ductable AC Repair</p>
                <p>Central AC Repair</p>
                <p>Package AC Repair</p>
                <p>Cold Storage Service</p>
              </div>
            )}
          </div>
        </Link>
        <Link to={`/Gallery`}>
          <h3 className="Selection">Gallery</h3>
        </Link>
        <Link to={`Contact Us`}>
          <h3 className="Selection">Contact Us</h3>
        </Link>
      </div>
    </>
  );
};
