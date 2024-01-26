import Navigation from "./Layouts/Navigation";
import Header from "./Layouts/Header";

import "./styles/style.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{/* <Navigation /> */}</header>
      <Header />
    </div>
  );
};

export default App;
