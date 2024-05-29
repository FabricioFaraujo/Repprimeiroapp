import React from "react";
import './comentarios.css';
import Header1 from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Buttonjr from "../../components/button/button";
import fotoperfil from '../../assets/pochita.jpg'


function Comentarios(){
    return(
        <>
        <Header1/>
        <div id="cometario-contaner">
            <img id="foto" src={fotoperfil}/>
            <div id="comente-container">
                <input name="coments" placeholder="Comente:"></input>
                <input></input>
                <input></input>
                <input></input>
            </div>

        </div>
        <div className="opinioes-container">
            <span className="opinioes"> João-123: filme top de mais</span>
            <span className="opinioes"> Pedrinho-157: slo pai o filme ta rocheda</span>
            <span className="opinioes"> Joãozinho do rau: filme top de mais pia</span>
            <span className="opinioes"> João-123: filme top de mais</span>
            <span className="opinioes"> Pedrinho-157: slo pai o filme ta rocheda</span>
            <span className="opinioes"> Joãozinho do rau: filme top de mais pia</span>
        </div>
        <Buttonjr/>
        <Footer/>
        </>
    )
}export default Comentarios;