import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NovoUsuario from "../pages/NovoUsuario/NovoUsuario";


export default function Rotas () {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/novoUsuario" element={<NovoUsuario />}/>

                </Routes>
            </Router>
        </>
    );
}