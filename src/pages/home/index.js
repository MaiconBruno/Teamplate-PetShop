
import Navbar from '../global/navbar';
import './styles.css';
import productone from '../../assets/images/Layer-24.png';
import producttwo from '../../assets/images/Layer-25.png';
import producttree from '../../assets/images/Layer-26.png';
import productfor from '../../assets/images/Layer 23.png';
import icoLogo from '../../assets/images/icone-logo-copy.png';
import Footer from '../global/footer';
export default function home() {
  //items
  const focusProducts = [
    {
      product: 'Loren product',
      price: 99.99,
      promotion: false,
      image: producttree,
    },
    {
      product: 'Loren two product',
      price: 99.99,
      promotion: false,
      image: productfor,
    },
    {
      product: 'Loren product dd',
      price: 99.99,
      promotion: false,
      image: producttwo,
    },
    {
      product: 'Loren producd loren lore',
      price: 99.99,
      promotion: false,
      image: productone,
    },

  ];

  //items 2
  const AllProducts = [
    {
      product: 'Loren product',
      price: 99.99,
      promotion: false,
      image: producttree,
    },
    {
      product: 'Loren producd loren lore',
      price: 99.99,
      promotion: false,
      image: productone,
    },
    {
      product: 'Loren product dd',
      price: 99.99,
      promotion: false,
      image: producttwo,
    },
    {
      product: 'Loren product',
      price: 99.99,
      promotion: false,
      image: producttree,
    },
    {
      product: 'Loren producd loren lore',
      price: 99.99,
      promotion: false,
      image: productone,
    },
    {
      product: 'Loren product dd',
      price: 99.99,
      promotion: false,
      image: producttwo,
    },
    {
      product: 'Loren product',
      price: 99.99,
      promotion: false,
      image: producttree,
    },
    {
      product: 'Loren producd loren lore',
      price: 99.99,
      promotion: false,
      image: productone,
    },

  ];


  return (
    <div>
      <Navbar />
      <div>
        {/* Banner Section start*/}
        <section id="banner-section"></section>
        {/* Banner Section end*/}

        {/*Bars types of products start */}
        <div id="bar-types">
          <div className="sub-bar">
            <div className="item-a"></div>
            <div className="item-b"></div>
            <div className="item-c"></div>
          </div>
        </div>
        {/* Bar types of producs end */}

        {/* Focus section start*/}
        <div id="focus-section">

          <div className="div-title">
            <h2>
              Novidades
            </h2>
          </div>

          <div className="div-cards">
            {focusProducts.map(data => (
              <>
                <div class="card">
                  <img className="product-image" src={data.image} alt="" />
                  <h2>{data.product}</h2>
                  <h3>{data.price}</h3>
                  <div class="card__overlay">
                    <div class="overlay__text">
                      <a href="#" class="button">Comprar</a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Focus section end*/}

        {/* start Card cat and dog */}
        <div id="section-animal-options">
          <div className="animal-options">
            <div className="card-cat"></div>
            <div className="card-dog"></div>
          </div>
        </div>
        {/* Start card and dog */}

        {/* Products section start*/}
        <div id="focus-section">
          <div className="div-title">
            <h2>
              Destaques
            </h2>
          </div>
          <div className="div-cards">
            {AllProducts.map(data => (
              <div class="card">
                <img className="product-image" src={data.image} alt="" />
                <h2>{data.product}</h2>
                <h3>{data.price}</h3>
                <div class="card__overlay">
                  <div class="overlay__text">
                    <a href="#" class="button">Comprar</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Products section end*/}

        {/* Rodape and form */}
        <div id="news-latter-rodape">
          <div className="news-latter">
            <div className="top-info-news-latter">
              <div className="container-newslatter">
                <div className="box-icons">
                  <div className="icon-img-box">
                    <img className="ico_logo rodape" src={icoLogo} alt="" />
                  </div>
                  <div className="text-img-box">
                    <h3><strong>ENTREGA GRATUITA</strong> A PARTIR DE R$99</h3>
                  </div>
                </div>
                <div className="box-icons">
                  <div className="icon-img-box">
                    <img className="ico_logo rodape" src={icoLogo} alt="" />
                  </div>
                  <div className="text-img-box">
                    <h3><strong>PARCELAMENTO</strong> SEM JUROS</h3>
                  </div>
                </div>
                <div className="box-icons">
                  <div className="icon-img-box">
                    <img className="ico_logo rodape" src={icoLogo} alt="" />
                  </div>
                  <div className="text-img-box">
                    <h3><strong>CADASTRE-SE</strong> E GANHE DESCONTO</h3>
                  </div>
                </div>

              </div>
            </div>
            <div className="container-form">
              <div className="containter-title">
                <h3>
                  Assine nossa newslatter
                </h3>
                <p>Cadastre-se para receber novidades e descontos exclusivos!</p>
              </div>
              <div className="box-form">
                <form id="news-latter-form" action="">
                  <input type="text" name="" id="" placeholder="Nome" />
                  <input type="text" name="" id="" placeholder="E-mail" />
                  <button type="button">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}