import React, { useRef, useState } from "react"
import { useAdiconarParticipante } from "../../state/hooks/useAdiconarParticipante"
import { useMensagemErro } from "../../state/hooks/useMensagemErro"
import './Formulario.css'


const Formulario = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdiconarParticipante()
    const mensagemErro = useMensagemErro()

    const [nome, setNome] = useState('')

    const adiconarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()

    }

    return (<form onSubmit={adiconarParticipante}>
        <div className="grupo-input-btn">
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>)
}
export default Formulario
