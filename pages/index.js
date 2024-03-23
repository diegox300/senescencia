import { useState } from 'react';
import Link from 'next/link';

function Home(){
    return ( 
        <div>
            <center>
                <h1>Home</h1>
                <h3>Contador</h3>
                <Link href="/sobre" > Acessar página Sobre </Link>
                <Contador />
             </center>
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1 );
    }
   return(
         <div>
            <div><h4>{contador}</h4></div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home