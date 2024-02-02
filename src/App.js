import Navigation from "./Layouts/Navigation";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";

import brandLogo from "./images/logo.svg";

import "./styles/style.css";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="App-header">{/* <Navigation /> */}</header>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer brandLogo={brandLogo} />
    </div>
  );
};

export default App;
