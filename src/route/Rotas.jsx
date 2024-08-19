import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";


export default function Rotas () {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                </Routes>
            </Router>
        </>
    );
}