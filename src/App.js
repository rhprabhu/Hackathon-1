import "./App.css";

import Home from "./components/Home";
import NewGame from "./pages/NewGame";
import PlayerDetails from "./pages/PlayerDetails";
import Game from "./pages/Game";
import Result from "./pages/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import logo from "./images/logo.svg";

function App() {
  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + "/images/logo.svg"} /> */}
      {/* <Home /> */}
      {/* <PlayerDetails /> */}

      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<NewGame />} exact />
          <Route path="details" element={<PlayerDetails />} exact />
          <Route path="game" element={<Game />} exact />
          <Route path="result" element={<Result />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
