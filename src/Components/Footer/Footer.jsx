import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
          Stay connected with Luxury Rentals for the latest updates and exclusive offers. We&apos;re committed to providing you with the best luxury rental experience. Contact us today and let&apos;s make your dream vacation a reality.
          </p>
          <ul className=''>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+911 1234 999</p>
          <p>luxuryrentals@gmail.com</p>
          <p>© All Rights Reserved By LUXURY RENTALS</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;