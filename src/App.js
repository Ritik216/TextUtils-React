// import logo from './logo.svg';
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.1";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // https://v5.reactrouter.com/web/api/Switch ---> Documentation of react router


  // Enabling dark and light mode in textform
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#211b4a";
      showalert("Dark Mode Enabled", "success");
      document.title = "Dark Mode Enabled";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
      document.title = "Light Mode Enabled";
    }
  };

  // Given below state is for alert
  const [alert, setalert] = useState(null);

  // This method is for setting type and msg for alert
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  // Given below state is for dark and light mode
  const [mode, setMode] = useState("light");
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}/>
      {/* <Navbar title="TextUtils"/> */}
      {/* <Navbar/> */}
      <Alert alert={alert} />
     

      <div className="container my-3">
      <Routes>

      <Route path="/about" element={<About />} />

      <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />} />

        {/* The Syntax below only works for old version */}
          {/* <Route path="/about">
            <About/>
          </Route> */}
          {/* <Route path="/">
          <TextForm
          showalert={showalert}
          heading="Enter the text to analyze below"
          mode={mode}
          />
          </Route> */}
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
