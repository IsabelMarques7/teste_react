import { Cabecalho } from "../../componets/cabeçalho/cabeçalho"
import { Mensagem } from "../../componets/mensagem/mensagem"
import { NavBar } from "../../componets/navbar/navbar"
import { Rodape } from "../../componets/rodape/rodape"


export const Contatos = () =>{
    
    return(
        <>
          <NavBar/>
          <Cabecalho titulo = "contatos"/>
          <Mensagem/>
          <Rodape/>
        </>
    )
}