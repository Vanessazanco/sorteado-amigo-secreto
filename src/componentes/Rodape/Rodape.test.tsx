import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../../state/hooks/useSorteador";

jest.mock('../../state/hooks/useListaDeParticipantes',() => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockSorteio = jest.fn()
jest.mock('../../state/hooks/useSorteador',()=>{
    return {
        useSorteador: () => mockSorteio
    }
})


const mockNavegacao = jest.fn()
jest.mock('react-router-dom',()=>{
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('Onde não existe participantes suficientes',() =>{
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('A brincadeira não pode ser iniciada',()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})
describe('Quando existir participantes suficientes',() =>{
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Vanessa','Maria','Andressa'])
    })
    test('A brincadeira pode ser iniciada',()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('A brincadeira foi iniciada',()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})