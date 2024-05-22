export const Rodape = ()=>{
    return(
        <>
  {/* rodapé inicio */}
  <section className="rodape">
    <div className="box-container">
      <div className="box">
        <h3>sobre nos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero
          pariatur quam voluptates ipsa{" "}
        </p>
        <div className="compartilhar">
          <a href="#" className="fab fa-facebook" aria-hidden="true" />
          <a href="#" className="fab fa-twitter" aria-hidden="true" />
          <a href="#" className="fab fa-instagram" aria-hidden="true" />
          <a href="#" className="fab fa-linkedin" aria-hidden="true" />
        </div>
      </div>
      <div className="box">
        <h3>contatos</h3>
        <p>(00) 1234-5678</p>
        <a href="#" className="link">
          contato@pizzariaficticia.com.br
        </a>
      </div>
      <div className="box">
        <h3>endereço</h3>
        <p>
          Rua Fictícia, <br />
          123, Cidade
        </p>
      </div>
    </div>
    <div className="creditos">
      criado por <span>vdsvsv</span> | todos os direitos reservados{" "}
    </div>
  </section>
  {/* rodapé fim */}
    </>
    )
}