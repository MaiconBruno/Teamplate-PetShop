import './styles.css';
import Logo from '../../../assets/images/logo.png';
import FaceIco from '../../../assets/images/facebook.png';
import InstaIco from '../../../assets/images/insta.png';
import TwIco from '../../../assets/images/twitter.png';
import PaymentIco from '../../../assets/images/pagamento.png';
import serieIco from '../../../assets/images/seri.e.png';

export default function Footer() {
  return (
    <>
      <div id="div-main-footer">

        <div className="col-a">
          <img src={Logo} alt="" />
          <div className="div-icons-rodape">
            <img src={FaceIco} alt="Facebook" />
            <img src={InstaIco} alt="Instagram" />
            <img src={TwIco} alt="Twitter" />
          </div>
          <h4> 2019 - CPNJ 00.000.000/0000-00</h4>
          <p>Rua Tal de Tal, 123 - Cidades Estado</p>
        </div>

        <div className="col-b">
          
            <h3>PET STORE</h3>
            <ul>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Como comprar</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Frete e Entregas</a></li>
            </ul>
         
        </div>

        <div className="col-c">
          <h3>CONTATO</h3>
          <ul>
            <li><a href="#">(99) 9999-9999</a></li>
            <li><a href="#">(99) 9999-9999</a></li>
            <li><a href="#">petstore@petstore.com.br</a></li>
          </ul>
        </div>

        <div className="col-d">
          <h3>PET STORE</h3>
          <img src={PaymentIco} alt="" />
        </div>

        <div className="text-footer-bottom">
          <h5>TECNOLOGIA E DESENVOLVIMENTO </h5>
          <img className="logo-serie-rodape" src={serieIco} alt="" />
        </div>
      </div>

      <div className="box-btn-whatsapp">
        <a href="https://api.whatsapp.com/send?phone=#" >
          <img className="whatsapp"
            src={'https://images.tcdn.com.br/static_inst/integracao/imagens/whatsapp.png'} />
        </a>
      </div>
    </>
  );
}