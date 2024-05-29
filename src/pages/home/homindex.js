import React, {lazy, Suspense, useState} from "react"; 
import Header1 from "../../components/header/header";
import './homestyle.css';
import videoT from '../../assets/veiopqquiz.mp4'
import Cards from "../../components/cards/cardindex";
import Buttonjr from "../../components/button/button";
import Footer from "../../components/footer/footer";
 
function Home(){

    return(
        <>
        <Header1/>
        <div id="banner" ></div>
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={videoT} />
                    seu navegador não tem suporte para videos negão
                </video>
            
                <div id="sinopse" >
                    <p className="description" >
                    Chainsaw Man - The Movie: Reze Arc will focus on Denji's romantic relationship with Reze, 
                    a mysterious new character who has a sinister backstory. The movie is a direct adaptation 
                    of the manga's Bomb Girl Arc, which encompasses Chapters 40-52 of the manga
                    </p>
                </div>
            </div>    
        </div>
        
        <Buttonjr/>
        <Cards />
        <Footer/>
        </>
    )
}
export default Home;