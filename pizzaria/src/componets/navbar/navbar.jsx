export const NavBar = () =>{
    return (
      <>
         {/* inicio do cabeçalho */}
  <header className="header">
    <a href="inicio.html" className="logo">
      {" "}
      <i className="fas fa-pizza-slice" />
      pizza
    </a>
    <nav className="navbar">
      <a href="/">inicio</a>
      <a href="sobre">sobre nos</a>
      <a href="menu">menu</a>
      <a href="galeria">galeria</a>
      <a href="contatos">contatos</a>
    </nav>

    <div className="icons">
      <div id="cart" className="fas fa-shopping-cart" />
      <div id="login" className="fas fa-user" />
      <div id="menu" className="fa fa-bars" />
    </div>
    <div className="shopping-cart">
      <div className="box">
        <i className="fas fa-times" />
        <img src="img/pizza_calabresa_resized.png" alt="" />
        <div className="content">
          <h3>pizza</h3>
          <span className="quantidade">1</span>
          <span className="multiply">x</span>
          <span className="preço">$ 18.99</span>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-times" />
        <img src="img/pizza_portuguesa_resized.png" alt="" />
        <div className="content">
          <h3>pizza</h3>
          <span className="quantidade">1</span>
          <span className="multiply">x</span>
          <span className="preço">$ 18.99</span>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-times" />
        <img src="img/pizza_queijo_resized.png" alt="" />
        <div className="content">
          <h3>pizza</h3>
          <span className="quantidade">1</span>
          <span className="multiply">x</span>
          <span className="preço">$ 18.99</span>
        </div>
      </div>
      <h3 className="total">total: #56.97</h3>
      <a href="#" className="btn">
        checkout cart
      </a>
    </div>
    {/* <form>: Esta é uma tag HTML usada para criar um formulário.
                       O formulário é uma estrutura que permite ao usuário inserir dados que podem ser submetidos para processamento do lado do servidor. */}
    <form action="" className="login-form">
      {/* class="login-form": Este atributo class atribui a classe CSS login-form ao formulário.
                          Essa classe pode ser usada para estilizar o formulário de acordo com as regras CSS específicas. */}
      {/* action="": O atributo action especifica para onde os dados do formulário serão enviados quando ele for submetido.
                       Neste caso, o valor está vazio (""), o que significa que o formulário será enviado para a mesma página que está atualmente sendo exibida. */}
      <h3>login form</h3>
      <input type="email" placeholder="digite seu email" className="box" />
      <input type="password" placeholder="digite sua senha" className="box" />
      <div className="lembre">
        {/* <input> cria uma caixa de seleção (checkbox) no formulário */}
        {/* O atributo name define o nome da caixa de seleção. 
              Como está vazio neste caso, a caixa de seleção não enviará nenhum valor específico quando o formulário for submetido. */}
        {/* id="lembre-de-mim": O atributo id atribui um identificador único a essa caixa de seleção. Este identificador é usado para associar a caixa de seleção ao seu rótulo correspondente. */}
        <input type="checkbox" name="" id="lembre-se" />
        <label htmlFor="lembre-se">lembre-se</label>
      </div>
      {/* O atributo value define o texto exibido no botão e a classe  */}
      <input type="enviar" defaultValue="login" className="btn" />
      
    </form>
  </header>
  {/* fim do cabeçalho */}
    </> 
      
    )
}
