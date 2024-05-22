import { NavBar } from "../../componets/navbar/navbar"
import { Cabecalho } from "../../componets/cabeçalho/cabeçalho"
import { Cardapio } from "../../componets/cardapio/cardapio"
import { Rodape } from "../../componets/rodape/rodape"

export const Menu = () =>{
    
    return(
        <>
          <NavBar/>
          <Cabecalho titulo = "menu"/>
          <Cardapio/>
          <Rodape/>
        </>
    )
}