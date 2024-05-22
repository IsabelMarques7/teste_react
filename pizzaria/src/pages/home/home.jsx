import { Banner } from "../../componets/banner/banner"
import { Inicio } from "../../componets/inicio/inicio"
import { NavBar } from "../../componets/navbar/navbar"
import { Passo } from "../../componets/passo/passo"
import { Menu_Pizza } from "../../componets/pizza_menu/pizza_menu"
// import { Menu_Pizza } from "../../components/pizza_menu/pizza_menu"
// import { Rodape } from "../../components/rodape/rodape"


export const Home = () =>{
    
    return(
        <>
          <NavBar/>
          <Inicio/>
          <Banner/>
          <Passo/>
          <Menu_Pizza/>
          {/*
          <Menu_Pizza/>
          <Rodape/> */}
        </>
    )
}

