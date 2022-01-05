import React, {useState} from 'react'
import Alert from './components/Alert';
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msge: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutus="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter text to analyze blew" mode={mode}/>
    {/* <AboutUs colorMode="Enable Dark Mode"/> */}
    </>
  );
}

export default App;
