import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../Atom"

export const useAdiconarParticipante = () => {
        const setLista = useSetRecoilState(listaDeParticipantesState)
        const list = useRecoilValue(listaDeParticipantesState)
        const setErro= useSetRecoilState(erroState)
        return (nomeDoParticpante :string) => {
            if (list.includes(nomeDoParticpante)) {
                setErro('Nomes duplicados não são permitidos')
                setTimeout(()=>{
                    setErro("")
                },6000)
                return
            }
            return setLista(listaAtual => [...listaAtual,nomeDoParticpante])
        }
} 