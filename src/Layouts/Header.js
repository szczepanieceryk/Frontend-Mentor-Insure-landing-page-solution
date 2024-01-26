import "../styles/_header.scss";
import HeaderMobileImg from "../images/image-intro-mobile.jpg";
// import HeaderDesktopImg from "../images/image-intro-mobile.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img
        className="header-img"
        src={HeaderMobileImg}
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
  );
};

export default Header;
