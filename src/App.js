import './App.css';
import Navbar from './Components/Navbar';
import DisplayAlert from './Components/DisplayAlert';
import TextForm from './Components/TextForm';
import About from './Components/About'
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#052c65"
      showAlert("success", "Dark Mode has been enabled");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("success", "Light Mode has been enabled");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <DisplayAlert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about"
          element = { <About mode={mode}/> }>
          </Route>
          <Route exact path="/"
            element = {
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> }>
          </Route>
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
