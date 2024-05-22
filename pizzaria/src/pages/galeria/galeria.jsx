import { NavBar } from "../../componets/navbar/navbar"
import { Cabecalho } from "../../componets/cabeçalho/cabeçalho"
import { Fotos } from "../../componets/fotos/fotos"
import { Rodape } from "../../componets/rodape/rodape"

export const Galeria = () =>{
    
    return(
        <>
          <NavBar/>
          <Cabecalho titulo = "galeria"/>
          <Fotos/>
          <Rodape/>
        </>
    )
}