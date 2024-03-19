import { useState } from 'react';

function Home(){
    return ( 
        <div>
            <center>
                <h5>Home</h5>
                <Contador />
             </center>
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 20 );
    }
   return(
         <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home