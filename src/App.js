import './App.css';
import React from 'react';
import Home from './pages/home/homindex';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';

// -- BrowserRouter: deve envouver toda parte da aplicação q vai utilizar de rotas, 
// como toda aplicação vai usar rotas, passamos ele no inicio da nossa aplicação 
// -- Routes: evolve todas as rotas, tudo q é rota deve ficar dentro do router
// -- route:  Serve para criar as rotas

function App() {

  return(
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
