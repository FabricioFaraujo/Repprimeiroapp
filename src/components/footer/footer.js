import React from "react";
import './footer.css';
import Logo2 from '../../assets/logochain3.png'
import { Link } from "react-router-dom";

function Footer(){
    return(
    <>
        <div id="footer-container">
            <img id="logo2"src={Logo2} />
            <span>Todos os direitos reservados © </span>
            <span>Desenvolvido por Fabrício Freire de Araújo    </span>
        </div> 
    </>
 
    )
}
export default Footer;