import brandLogo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

import "../styles/_navigation.scss";
const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <nav className="nav-top">
        <img className="brand-logo" src={brandLogo} alt="brand logo" />
        <img
          className="hamburger-icon"
          src={hamburgerIcon}
          alt="mobile menu icon"
        />
        <img className="close-icon" src={closeIcon} alt="mobile menu icon" />
        <ul className="ul-element">
          <li className="li-element">
            <a href="#" className="link-element">
              How we work
            </a>
          </li>
          <li className="li-element">
            <a href="#" className="link-element">
              Blog
            </a>
          </li>
          <li className="li-element">
            <a href="#" className="link-element">
              Account
            </a>
          </li>
          <li className="li-element">
            <a href="#" className="link-element">
              View plans
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
