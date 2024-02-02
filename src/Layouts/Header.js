import "../styles/_header.scss";
import HeaderMobileImg from "../images/image-intro-mobile.jpg";
import HeaderDesktopImg from "../images/image-intro-desktop.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getImageSize = () => {
    if (windowWidth < 576) {
      return HeaderMobileImg;
    } else {
      return HeaderDesktopImg;
    }
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <img
          className="header-img"
          src={getImageSize()}
          alt="people holding hands"
        />
        <div className="header-banner">
          <h1 className="header-title">
            Humanizing <br /> your insurance.
          </h1>
          <p className="header-txt">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="btn btn-outline">View plans</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
