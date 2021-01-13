import './styles.css';
import Logo from '../../../assets/images/logo.png';
import FaceIco from '../../../assets/images/facebook.png';
import InstaIco from '../../../assets/images/insta.png';
import TwIco from '../../../assets/images/twitter.png';
import PaymentIco from '../../../assets/images/pagamento.png';
import serieIco from '../../../assets/images/seri.e.png';

export default function Footer() {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
        <div>
          <img src={FaceIco} alt="Facebook" />
          <img src={InstaIco} alt="Instagram" />
          <img src={TwIco} alt="Twitter" />
        </div>
        <h4> 2019 - CPNJ 00.000.000/0000-00</h4>
        <p>Rua Tal de Tal, 123 - Cidades Estado</p>
      </div>
      <div>
        <h3>PET STORE</h3>
        <ul>
          <li>Quem somos</li>
          <li>Como comprar</li>
          <li>Trocas e Devoluções</li>
          <li>Frete e Entregas</li>
        </ul>
      </div>
      <div>
        <h3>CONTATO</h3>
        <ul>
          <li>(99) 9999-9999</li>
          <li>(99) 9999-9999</li>
          <li>(99) petstore@petstore.com.br</li>
        </ul>
      </div>
      <div>
        <h3>PET STORE</h3>
        <img src={PaymentIco} alt="" />
      </div>
      <div>
        <h5>TECNOLOGIA E DESENVOLVIMENTO <img src={serieIco} alt="" /></h5>
      </div>
      <div className="box-btn-whatsapp">
        <a href="https://api.whatsapp.com/send?phone=#" >
          <img className="whatsapp"
            src={'https://images.tcdn.com.br/static_inst/integracao/imagens/whatsapp.png'} />
        </a>
      </div>
    </div>
  );
}