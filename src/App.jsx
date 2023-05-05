import { useEffect, useState } from "react";
import "./App.css";
import Trending from "./components/Trending/Trending";
import Popular from "./components/Popular/Popular";
import Upcoming from "./components/Upcoming/Upcoming";
// import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <Trending />
      <Popular />
      <Upcoming />
    </div>
  );
}

export default App;
