import React from "react";

function Stampa() {
    const stampa2 = () => {
        console.log("stampa")
    }
    return <button onClick={stampa2}>Cliccami 3</button>
}

export default Stampa;