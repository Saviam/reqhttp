
import React from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';

const Routes = () =>{//usando o 'exact',ele só renderiza a pagina q tenha o path com aquela '/'
    //Usando o 'Switch, ele troca as paginas automaticamente
    //O 'Header' Precisa ficar dentro do BrowserRouter
    return(
        <BrowserRouter>
          <Header/>
         <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
         </Switch>   
        </BrowserRouter>
       
    )
}

export default Routes;