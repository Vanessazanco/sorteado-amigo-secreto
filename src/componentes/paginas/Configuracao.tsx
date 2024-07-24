import Card from "../Card"
import Formulario from "../Formulario/Formulario"
import ListaParticipantes from "../ListaParticipantes/ListaParticipantes"
import Rodape from "../Rodape/Rodape"

const Configuracao=()=>{
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao