import React from "react"
import { RecoilRoot } from "recoil"
import { render,screen } from "@testing-library/react"
import ListaParticipantes from "./ListaParticipantes"

describe('Uma lista vazia de participantes',()=>{
    render(<RecoilRoot>
        <ListaParticipantes/>
    </RecoilRoot>)

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
})