
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';


const url = 'http://localhost:8080/colaborador/post';
const url_1 = 'http://localhost:8080/lanche';

function App() {

  const objLanche = {
    nome: ''
  }

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [lanches, setlanches] = useState([]);
  const [obj, setobj] = useState(objLanche);
  const [resposta, setResposta] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const saveInput = (e) => {
    setobj({ ...obj, [e.target.name]: e.target.value });

  }

  const saveLanche = () => {
    console.log(obj);
    if(obj.nome === ''){
      alert("Você deve informar um valor para inserir, seu último valor válido está salvo!");
    }else{
      setlanches(prevState => [...prevState, obj]);
      setobj({nome:''})
      document.getElementById('lanches').value = "";
    }
  }

  const mudar = () => {
    setIsClick(false)
  }

  const visualizarLanches = (e) => {
    e.preventDefault();
    axios.get(url_1)
      .then((response) => {

        setResposta(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
    setIsClick(true);
  }

  const MostrarLanches = () => {
    return (
      <div>
        <ul>
          {resposta.map(resp => (
            <li key={resp.Id}>
              {resp.nome}<br />
            </li>
          ))}
        </ul>
        <button class="btn btn-primary" name='btnFechar' onClick={mudar} type='button'>Fechar</button>
      </div>
    );
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, { nome, cpf, lanches });
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      setlanches([]);
      alert(error.response.data.error + '\n' + error.response.data.message);

    }
  };

  return (
    <div id='div'>
      <Header controlador = '1'/>
      <form id='form' onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" class="form-control" id="nome" aria-describedby="emailHelp" placeholder="Digite seu nome" />

        </div>
        <div class="form-group">
          <label for="cpf">Cpf</label>
          <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="number" class="form-control" id="cpf" placeholder="Digite seu cpf" />
        </div>
        <div class="form-group">
          <label for="lanches">Lanche</label>
          <input name='nome' onChange={saveInput} type="text" class="form-control" id="lanches" placeholder="Digite o que vai levar" />
        </div>

        <button type='button' onClick={saveLanche} id='btn1' class="btn btn-primary">Inserir lanche</button>
        <button id='btn2' type="submit" class="btn btn-primary">Submit</button>

      </form>
      <button onClick={visualizarLanches} id='btn3' type="button" class="btn btn-primary">Ver lanches</button>

      {
        isClick === true &&
        <div>
          <h3>Lanches já cadastrados</h3>
          <hr></hr>
          <MostrarLanches />
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
