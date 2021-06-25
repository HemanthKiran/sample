import React from "react";

const App = () => {
  const styling = {
    color: "orange",
    textAlign: "center",
    backgroundColor: "skyblue",
    padding: "30px",
    border: "2px solid black",
  };
  return (
    <div style={{ margin: "30px" }}>
      <h1 style={styling}>Welcome to skill hub</h1>
    </div>
  );
};
export default App;
