import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './header.css';
import Logo from '../../assets/logochain3.png'
// ^ ASSIM VAMOS IMPORTAR MIDIAS NO REACT ^ IMORTAMOS DEPOIS CHAMAMOS PELO NOME
// useEffect: ele executa a função assim q o componente for recarregado em tela

function Header1(){

    return(
        <>
        <div className="header1">
            <img id="logo" src={Logo}/>
        </div>
        <header>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to= '/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to= '/contato'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to= '/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to= '/comentarios'>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}   


export default Header1;