import React, { useRef, useState } from "react"
import { useAdiconarParticipante } from "../state/hooks/AdiconarParticipante"

const Formulario = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdiconarParticipante()

    const [nome,setNome] = useState('')

    const adiconarParticipante = (evento:React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()

    }

    return (<form onSubmit={adiconarParticipante}>
        <input
        ref={inputRef}
        value={nome}
        onChange={evento =>setNome(evento.target.value)}
        type="text" 
        placeholder="Insira os nomes dos participantes" />
        <button disabled ={!nome}>Adicionar</button>
    </form>)
}
    export default Formulario
