import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/header/NavBar";
import Home from "./pages/1.home/Home";
import Login from "./pages/2.login/Login";
import Notes from "./pages/3.notes/Notes";
import Math from "./pages/4.math/Math";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<><NavBar/> <Home/></>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/notes' element={<><NavBar/><Notes/></>}/>
                <Route path='/math' element={<><NavBar/><Math/></>}/>
            </Routes>
        </Router>
    );
};

export default App;