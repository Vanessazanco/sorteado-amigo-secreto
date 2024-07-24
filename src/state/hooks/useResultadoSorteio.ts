import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../Atom"


export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto)
}