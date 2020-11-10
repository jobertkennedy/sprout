import { useState } from 'react'


function Contador(props){
    const [contador, setContador] = useState(1)

    function addContador(){
        setContador(contador + 1)
    }
    function removeContador(){
        setContador(contador - 1)
    }
    
    return (
        <div>
        <div>{contador}</div>
        <div id="buttonSect">
        <button onClick={addContador}>Adicionar</button>
        <button onClick={removeContador}>Remover</button>
        </div>
        </div>
    )
}

function Main(){
    return (
        <div>
        <h2>How Many Sprouts?</h2>
        < Contador/>
        </div>
    )
}

function App(){
    return (
        <div>
            < Main/>
        </div>
    )
}

export default Main