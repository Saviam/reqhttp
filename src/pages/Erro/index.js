
import { Link } from 'react-router-dom'
export default function Erro (){

    return(
      <div>
        <h1>Página não existe</h1><br/>

        <span>Voce pode estar procurando:</span><br/>

        <Link to="/" >Home</Link> <br/>
         <Link to="/contato">Contatos</Link>
      </div>
    )
  
  }
  
