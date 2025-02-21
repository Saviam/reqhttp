
import React from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

const Routes = () =>{//usando o 'exact',ele só renderiza a pagina q tenha o path com aquela '/'
    //Usando o 'Switch, ele troca as paginas automaticamente
    //O 'Header' Precisa ficar dentro do BrowserRouter
    //Usando '*' em path (tem q ser sempre a ultima Route), ele manda pra pagina de Erro se digitar algo a mais, mas se tiver '/' ele ainda abre a pagina, então tem q usar o 'exact'
    return(
        <BrowserRouter>
          <Header/>
         <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/sobre" component={Sobre} />
            <Route exact path="/contato" component={Contato} />
            <Route path="/produto/:id" component={Produto} />
            <Route path="*" component={Erro}/> 
         </Switch>   
        </BrowserRouter>
       // usando o '/:id' ele recebe o id dinamico de algum produto
    )
}

export default Routes;