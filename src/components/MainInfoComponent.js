import "../styles/_infoComponent.scss";
const MainInfoComponent = ({ img, title, txt }) => {
  return (
    <div className="single-info-component">
      <img className="info-icon" src={img} alt="information icon" />
      <div className="info-txt-wrapper">
        <h3 className="info-title">{title}</h3>
        <p className="info-txt">{txt}</p>
      </div>
    </div>
  );
};

export default MainInfoComponent;
