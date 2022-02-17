import "./App.css";
import { BrowserRouter as Route, Routes } from "react-dom";
import NewGame from "./pages/NewGame";
import Game from "./pages/Game";
import Result from "./pages/Result";
import PlayerDetails from "./pages/PlayerDetails";
import Home from "./components/Home";

// import logo from "./images/logo.svg";

function App() {
  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + "/images/logo.svg"} /> */}
      {/* <Home /> */}
      {/* <PlayerDetails /> */}
      {/* <NewGame /> */}
      <Result />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={<NewGame />} />
          <Route path="/details" component={<PlayerDetails />} />
          <Route path="/game" component={<Game />} />
          <Route path="/result" component={<Result />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
