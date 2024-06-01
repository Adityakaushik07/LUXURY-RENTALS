import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>We&apos;re here to help you find your dream vacation home.</p>
        <p>
        Get in touch with us today and let&apos;s start planning your unforgettable getaway.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let&apos;s connect</h3>
              <div>
                <p>Phone</p>
                <span>+911 1234 999</span>
              </div>
              <div>
                <p>Email</p>
                <span>luxuryrentals@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
              </div>
              <ul>
               <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;