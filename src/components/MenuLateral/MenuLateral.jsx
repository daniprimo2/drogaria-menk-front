import './main.sass'
import Campo from "../campoMenu/Campo";
import CampoSimples from '../CampoMenuSimples/Campo';

import logo from '../../image/Logo_Drogaria_Menk-removebg-preview.png'


function MenuLateral({mostra, mostraSubMenu, setMostraSubMenu, nomeMenu}) {
 
     
    const menuLancamento = [
        {path: "/novoLancamento", label: "Novo Lançamentos"},
        {path: "/buscarLancamentos", label: "Buscar Lancamentos"},
        {path: "/buscarParcelas", label: "Buscar Parcelas"}
    ];


    return (
    <div className={mostra ? "active" : "sidenav"}>
                <img src={logo} alt="Logo da Drogaria" id="logo" />

        <CampoSimples nomeMenu={"Home"} />
        {/*<Campo nomeMenu={"Administracao"} listaSubMenus={menuAdministracao}/>*/}
    </div>
  )
}

export default MenuLateral