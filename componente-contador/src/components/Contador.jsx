import React, {useState} from "react";

function Contador(){
    const [click, contarClick] = useState(0);

    let contar = () => {
        contarClick(click + 1)
    } 

    return(
        <div>
            <h1>Atividade 1</h1>
            <p>{click}</p>
            <button onClick={contar}>Incrementar</button>
        </div>
    )

}

export default Contador;