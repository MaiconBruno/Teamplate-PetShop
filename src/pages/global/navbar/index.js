import logo from '../../../assets/images/logo.png';
import './styles.css';

export default function Navbar() {
    
  var state = true;

  const ToogleActive = () =>{
    switch (state){
      case true:
        state = false;
        document.getElementById('nav-bottom').classList.add('nav-show');
        console.log(state);
        break;
      case false: 
        state = true;
        document.getElementById('nav-bottom').classList.remove('nav-show');
        console.log(state);
        break;
      default:
        state = true;
        break
    }
    
  }

  return (
    <header className="main">
      <div id="nav-top">
        <div className="a-block">
          <div className="seach-box">
            <input type='text' placeholder='Pesquisar' />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
        <div className="b-block">
          <img className="image-logo" src={logo} alt="logo" />
        </div>
        <div className="c-block">
          <div className="c-1"><i className="fas fa-user"></i></div>
          <div className="c-2"><i className="fas fa-shopping-cart"></i></div>
        </div>
      </div>

      <div id="nav-middle" className="">
        <button onClick={ToogleActive} className="toggle-navbar"><i className="fas fa-bars"></i></button>
      </div>

        <div id="nav-bottom" className="">  
          <div className="div-category">
            <a href="#category">Categoria</a>
            <a href="#category">Categoria input</a>
            <a href="#category">Categoria Loren</a>
            <a href="#category">Categoria input lore</a>
            <a href="#category">Categoria lore</a>
            <a href="#category">Categoria loreny</a>
          </div>
      </div>
    </header>
  );
}