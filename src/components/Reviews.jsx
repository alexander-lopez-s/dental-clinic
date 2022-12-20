import './Reviews-styling.css';


function Reviews () { 

  return (
    <div className='reviews'>
      <h2 className="reviews-title">Reseñas de nuestros clientes</h2>
      <hr></hr>
      <div class="cards-reviews">
        <div class="card">
            <div class="card-top">
                <div class="name">
                    <div class="img one" alt="">MC</div>
                    <p>Maggie Caceres</p>
                </div>
                <div class="rate">
                    <p>💛💛💛💛💛</p>
                </div>
            </div>

            <div class="card-content">
                <p>"La mejor atención 🦷 dental"</p>
            </div>

            <div class="card-action">
                <span>15 Septiembre, 2021</span>
            </div>

        </div>
        <div class="card">
            <div class="card-top">
                <div class="name">
                    <div class="img">RH</div>
                    <p>Raquel Henriquez</p>
                </div>
                <div class="rate">
                <p>💛💛💛💛💛</p>
                </div>
            </div>

            <div class="card-content">
                <p>"Exelente servicio en atención y trabajos dentales 👍"</p>
            </div>

            <div class="card-action">
                <span>9 Julio, 2022</span>
            </div>
            </div>
            <div class="card">
            <div class="card-top">
                <div class="name">
                    <div class="img one">SA</div>
                    <p>Sergio Arevalo</p>
                </div>
                <div class="rate">
                <p>💛💛💛💛💛</p>
                </div>
            </div>

            <div class="card-content">
                <p>"Barato y un excelente trabajo... lo recomiendo al 100%"</p>
            </div>

            <div class="card-action">
                <span>15 Septiembre, 2022</span>
            </div>
            </div>
            </div>
            </div>
  );
}

export default Reviews;