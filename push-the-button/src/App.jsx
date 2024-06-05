import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

function App() {
  // return <div className="bg-green-500 w-full h-screen"></div>;
  return (
    <>
      <Title />
      <Display />
    </>
  );
}

export default App;
