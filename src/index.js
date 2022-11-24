import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Colaborador from './Colaborador';

import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} exact/>
        <Route path='/colaborador' element={<Colaborador/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rotas />);
/*root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" component={App } exact />
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
  
);*/

//reportWebVitals();
