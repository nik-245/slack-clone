import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="App">
      {/* <h1>slack clone first move 🚀</h1> */}

      {/* Header component */}
      <Header />

      <div className="app__body">
        {/* Sidebar comonent */}
        <Sidebar />
        {/* react-router -> for chat componentr visulizing way */}
      </div>
    </div>
  );
}

export default App;
