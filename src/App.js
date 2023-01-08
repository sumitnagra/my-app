import React,{useState} from "react";
import Navbar from './component/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./component/Home.js";
import About from "./component/About.js";
import NoteState from "./component/context/context.js"
import Alert from "./component/Alert.js";
import AddNote from "./component/Addnote.js";
import Login from "./component/context/login.js";
import SignUP from "./component/context/signup.js";
import Notebook from "./component/context/Notebook.js";

function App() {
    const [alert, setAlert] = useState(null)
    const showAlert = (massage, type) => {
        setAlert({
            msg: massage,
            type: type
        })
    }
    setTimeout(() => {
        setAlert(null)
    }, 2000);

    return (
        <>
            <NoteState showAlert={showAlert}>
                <Router>
                    <Navbar showAlert={showAlert}/>
                    <Alert alert={alert}/>
                    <Routes>
                        <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
                        <Route exact path="/home" element={<Notebook />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/addnote" element={<AddNote showAlert={showAlert}/>}></Route>
                        <Route exact path="/signup" element={<SignUP showAlert={showAlert} />}></Route>
                        <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
                    </Routes>
                </Router>
            </NoteState>
        </>
    )

}

export default App;
