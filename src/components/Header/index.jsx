import './index.css';
import cafe from './imagem/cafe.jpg' ;

function Header() {
    return(
       <div>
       <div id='div1'  class = "d-flex flex-wrap justify-content-center py-3 mb-4 ">
            <h1 id='h1'>Café da Manhã</h1>
            <button id='btn'>Ver colaboradores</button>
        </div>
        <img id='img' alt='ops' src={cafe}></img>
        <hr id='hr'/>
        </div>
    );
}
export default Header;