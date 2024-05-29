import React from "react";
import './contato.css';
import Header1 from "../../components/header/header";
import Buttonjr from "../../components/button/button";
import Footer from "../../components/footer/footer";
import fotoperfil from '../../assets/bannerreze.webp'



function Contato(){
    return(
        <>
        <Header1/>
        <div className="rodape">Contatos</div>
        <div id="dados-container">
            <img id="fotop" src={fotoperfil}/>
            <div id="comente-jr">
                <form>
                    <input name="Nome" placeholder="Nome:"></input>
                    <input name="address" placeholder="Endereço:"></input>
                    <input name="document" placeholder="Documento:"></input>
                    <input name="phone" placeholder="Celular:"></input>
                </form>
            </div>
        </div>
        <Buttonjr/>
        <Footer/>
        </>
    )
}export default Contato;