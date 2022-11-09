
import { useState } from 'react';
import './App.css';



function App() {

  const [nome,setNome] = useState("");
  const [cpf,setCpf] = useState("");
  const [lanche,setlanche] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {nome, cpf, lanche};

    fetch("http://localhost:8080/colaborador/post",{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      
    })
  }

  return (
    <div id='div'>

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
          <label for="lanche">Lanche</label>
          <input value={lanche} onChange={(e) => setlanche(e.target.value)} type="text" class="form-control" id="lanche" placeholder="Digite o que vai levar" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  );
}

export default App;
