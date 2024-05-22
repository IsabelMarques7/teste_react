export const Mensagem = () =>{
    return(
        <>
  {/* inicio contatos */}
  <section className="contatos">
    <div className="icon-container">
      <div className="icons">
        <i className="fas fa-phone-alt" />
        <h3>nosso numero</h3>
        <p>+55 4112345678</p>
        <p>+55 4112345678</p>
      </div>
      <div className="icons">
        <i className="fas fa-envelope" />
        <h3>nosso email</h3>
        <p>contato@pizzariaficticia.com.br</p>
        <p>contato@pizzariaficticia.com.br</p>
      </div>
      <div className="icons">
        <i className="fas fa-envelope" />
        <h3>nosso endereço</h3>
        <p>Rua Fictícia,123, Cidade</p>
      </div>
    </div>
    <div className="row">
      <form action="">
        <h3>entre em contato conosco</h3>
        <div className="inputBox">
          <input
            type="text"
            placeholder="insira com seu nome"
            className="box"
          />
          <input
            type="email"
            placeholder="insira com o email"
            className="box"
          />
        </div>
        <div className="inputBox">
          <input
            type="number"
            placeholder="insira seu numero"
            className="box"
          />
          <input type="text" placeholder="isnira o assunto" className="box" />
        </div>
        <textarea
          placeholder="sua mensagem"
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <input
          type="submit"
          defaultValue="envie sua mensagem"
          className="btn"
        />
      </form>
    </div>
  </section>
  {/* fim contatos */}
</>
    )
}