import { useRecoilValue } from "recoil"
import { erroState } from "../Atom"

export const useMensagemErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}