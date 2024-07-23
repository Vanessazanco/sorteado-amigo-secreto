import React, { useState } from "react"

const Formulario = () => {
    const [nome,setNome] = useState('')
    const adiconarParticipante = (evento:React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        
    }

    return (<form onSubmit={adiconarParticipante}>
        <input
        value={nome}
        onChange={evento =>setNome(evento.target.value)}
        type="text" 
        placeholder="Insira os nomes dos participantes" />
        <button disabled ={!nome}>Adicionar</button>
    </form>)
}
    export default Formulario
