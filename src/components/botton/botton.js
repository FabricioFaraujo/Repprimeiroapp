import React from "react";
import './styles.css'

function Button({name, active, onClick}){
    return(
        <div className="conteinerButton">
         <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
         <span>foda-se todos</span>
        </div>
    );
}
export default Button