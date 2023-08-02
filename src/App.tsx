import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div
      className="App container-fluid mt-5 p-5 bg-slate-200 rounded-3 text-center text-dark"
      style={{ maxWidth: "500px" }}
    >
      <Form />
    </div>
  );
}

export default App;
