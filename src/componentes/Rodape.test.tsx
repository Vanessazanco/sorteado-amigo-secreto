import { render,screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";

describe('Onde não existe participantes suficientes',() =>{
    test('A brincadeira não pode ser iniciada',()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})