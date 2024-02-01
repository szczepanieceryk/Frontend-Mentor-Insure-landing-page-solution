import Navigation from "./Layouts/Navigation";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";

import "./styles/style.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{/* <Navigation /> */}</header>
      <Header />
      <Main />
    </div>
  );
};

export default App;
