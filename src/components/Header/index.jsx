import './index.css';
import cafe from './imagem/cafe.jpg';
import { Link } from "react-router-dom";

function Header(props) {
    const cont = props.controlador;
    return(
       <div>
       <div id='div1'  className = "d-flex flex-wrap justify-content-center py-3 mb-4 ">
            <h1 id='h1'>Café da Manhã</h1>
            {
                cont === '1' &&
                <button type='button' id='btn'><Link to={'/colaborador'}  style={{ color: 'inherit', textDecoration: 'inherit' }}>Ver colaboradores</Link></button>
            }
            {
                cont === '0' &&
                <button type='button' id='btn'><Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit' }}>Voltar cadastro</Link></button>
            }
            
        </div>
        <img id='img' alt='ops' src={cafe}></img>
        <hr id='hr'/>
        </div>
    );
}
export default Header;