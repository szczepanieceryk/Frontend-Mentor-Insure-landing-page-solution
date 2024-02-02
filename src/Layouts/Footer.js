import facebooklIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";

import "../styles/_footer.scss";

const Footer = ({ brandLogo }) => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="socials">
          <img className="brand-logo" src={brandLogo} alt="brand logo" />
          <div className="social-icons-wrapper">
            <a href="">
              <img
                className="social-icons"
                src={facebooklIcon}
                alt="facebook logo"
              />
            </a>
            <a href="">
              <img
                className="social-icons"
                src={twitterIcon}
                alt="twitter logo"
              />
            </a>
            <a href="">
              <img
                className="social-icons"
                src={pinterestIcon}
                alt="pinterest logo"
              />
            </a>
            <a href="">
              <img
                className="social-icons"
                src={instagramIcon}
                alt="instagram logo"
              />
            </a>
          </div>
        </div>
        <div className="horizontal-bar"></div>
        <nav className="footer-navigation-wrapper">
          <ul className="ul-element">
            <div className="li-groups">
              <h5 className="li-label">Our company</h5>
              <li className="li-element">
                <a className="link-element" href="">
                  How we work
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Why Insure?
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  View plans
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Reviews
                </a>
              </li>
            </div>

            <div className="li-groups">
              <h5 className="li-label"> Help me</h5>

              <li className="li-element">
                <a className="link-element" href="">
                  FAQ
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Terms of use
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Privacy policy
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Cookies
                </a>
              </li>
            </div>

            <div className="li-groups">
              <h5 className="li-label"> Contact</h5>
              <li className="li-element">
                <a className="link-element" href="">
                  Sales
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Support
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Live chat
                </a>
              </li>
            </div>

            <div className="li-groups">
              <h5 className="li-label"> Others</h5>
              <li className="li-element">
                <a className="link-element" href="">
                  Careers
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Press
                </a>
              </li>
              <li className="li-element">
                <a className="link-element" href="">
                  Licenses
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
