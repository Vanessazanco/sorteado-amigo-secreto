import { useSetRecoilState } from "recoil"
import { listaDeParticipantesState } from "../Atom"

export const useAdiconarParticipante = () => {
        const setLista = useSetRecoilState(listaDeParticipantesState)
        return (nomeDoParticpante :string) => {
            return setLista(listaAtual => [...listaAtual,nomeDoParticpante])
        }
} 