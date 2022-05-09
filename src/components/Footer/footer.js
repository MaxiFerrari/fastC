import React from "react";
import Logo from "../../images/logo.svg";
import "./footer.scss";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-12 d-flex justify-content-center align-items-center my-2">
              <span>Privacy Policy</span>
              <div className="vertical-divider"></div>
              <span>User's Guide</span>
              <div className="vertical-divider"></div>
              <span>Contact Us</span>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <img src={Logo} alt="logo" className="my-2" />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <span className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec augue sit amet ante volutpat ornare. Duis at rhoncus nisl.
                Nam consequat efficitur lacus non pretium. Duis hendrerit
                malesuada aliquam. Curabitur facilisis diam in faucibus
                pharetra.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
