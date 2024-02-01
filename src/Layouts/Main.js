import "../styles/_main.scss";
import MainInfoComponent from "../components/MainInfoComponent";
import mainData from "../MainInfoData";

const Main = () => {
  return (
    <div className="main-wrapper">
      <h2 className="main-title">We’re different</h2>
      <div className="main-info-wrapper">
        {mainData.map((data) => (
          <MainInfoComponent
            key={data.id}
            img={data.img}
            title={data.title}
            txt={data.txt}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
