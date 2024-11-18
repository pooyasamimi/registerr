import React from "react";
import Registerform from "./components/Registerform";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <Registerform />
    </div>
  );
};

export default App;
