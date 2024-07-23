import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Jest -Test
test('Quando o inpout está vazio,novos participantes não podem ser adicionados',()=> {
    render(<Formulario/>)
    //Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //Encontrar o botão
    const botao = screen.getByRole('button')
    //Garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()

})

test('Adicionar um participante caso exista um nome preenchido',()=>{
    render(<Formulario/>)
    //Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //Encontrar o botão
    const botao = screen.getByRole('button')
    //Inserir um valor no input
    fireEvent.change(input,{
        target:{
            value:'Vanessa'
        }
    })
    //Clicar no botão de submeter
    fireEvent.click(botao)
    //Garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()
    //Garantir que o input não tenha um valor
    expect(input).toHaveValue("")
})