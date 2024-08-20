import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";


export default function Rotas () {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/home" element={<Home />}/>

                </Routes>
            </Router>
        </>
    );
}