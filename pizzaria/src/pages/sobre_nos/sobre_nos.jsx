import { NavBar } from "../../componets/navbar/navbar"
import { Cabecalho } from "../../componets/cabeçalho/cabeçalho"
import { Sobre } from "../../componets/sobre/sobre"
import { Blog } from "../../componets/blog/blog"
import { Rodape } from "../../componets/rodape/rodape"

export const Sobre_nos = () =>{
    
    return(
        <>
          <NavBar/>
          <Cabecalho titulo="sobre nos"/>
          <Sobre/>
          <Blog/>
          <Rodape/>
        </>
    )
}