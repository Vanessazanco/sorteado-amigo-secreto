import { useRecoilValue } from "recoil"
import { listaDeParticipantesState } from "../Atom"

export const useListaDeParticipantes =() => {
    return useRecoilValue(listaDeParticipantesState)
}