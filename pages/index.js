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
        <div id="contador">
        <div id="sprouts">{contador}</div>
        <div id="btnSect">
        <button onClick={addContador} id="add">Add</button>
        <button onClick={removeContador} id="rm">Remove</button>
        </div>
        </div>
    )
}

function Header(Props){
    return (
        <div>
            <h1 id="header-title">
                {Props.children}
            </h1>
        </div>
    )
}

function Main(){
    return (
        <div id="container">
        <Header>How Many Sprouts?</Header>
        < Contador/>
        </div>
    )
}

export default Main