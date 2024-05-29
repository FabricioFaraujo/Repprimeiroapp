import React from "react";
import './fotos.css';
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cardindex";
import Buttonjr from "../../components/button/button";


function Fotos(){
    return(
        <>
        <Header1/>
        <div className="fotos-cards-conteiner" >
            <div className="fotos-conteiner" >
                <div className="cards fbanner-1">Denji</div>
                <div className="cards fbanner-2">Makima</div>
                <div className="cards fbanner-3">Reze</div>
                <div className="cards fbanner-4">Power</div>
                <div className="cards fbanner-5">Aki</div>
                <div className="cards fbanner-6">Kishibe</div>
            </div>
        </div>
        <Buttonjr/>
        <Footer/>
        </>
    )
}export default Fotos;

