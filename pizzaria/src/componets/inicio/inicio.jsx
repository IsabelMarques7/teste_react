export const Inicio = () =>{
    return (
        <>
  {/* inicio do inicio */}
  <section className="inicio">
    <div className="swiper inicio-slider">
      <div className="swiper-wrapper">
        <div
          className="swiper-slide slide"
          style={{ background: "url(img/slide_1.jpg) no-repeat" }}
        >
          <div className="content">
            <h3>
              a<span> +deliciosa</span> pizza <br />
              do universo
            </h3>
            <a href="#" className="btn">
              pedir agora
            </a>
          </div>
        </div>
        <div
          className="swiper-slide slide"
          style={{ background: "url(img/slide_2.jpg) no-repeat" }}
        >
          <div className="content">
            <h3>
              a<span> +deliciosa</span> pizza <br />
              do universo
            </h3>
            <a href="#" className="btn">
              pedir agora
            </a>
          </div>
        </div>
        <div
          className="swiper-slide slide"
          style={{ background: "url(img/slide_3.jpg) no-repeat" }}
        >
          <div className="content">
            <h3>
              a<span> +deliciosa</span> pizza <br />
              do universo
            </h3>
            <a href="#" className="btn">
              pedir agora
            </a>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  </section>
  {/* final do inicio */}
</>
)}