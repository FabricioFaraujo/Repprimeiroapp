import React, { useContext } from "react";
import { UserContexts } from "../../contexts/userContexts";
function Profile1(){
    const {login} = useContext(UserContexts)
    return(
        <div>
            {login? 'dados do usuario' : 'faça seu login para coisar'}
        </div>
    )
}
export default Profile1;