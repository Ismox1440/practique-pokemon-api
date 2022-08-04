
import React, {useState, useEffect} from 'react';


const Hero = ({ paginaSiguiente,handleSiguiente,Stats,paginaPrevia, handleInicio , handleAtras}) => {


   

    
    


    return ( 
        
        <div className='hero'>
            {Stats && paginaPrevia ? <button  onClick={handleAtras} className={paginaPrevia ? 'boton boton-si' : 'boton boton-no'}>Atras</button> : <button   className={paginaPrevia ? 'boton boton-si' : 'boton boton-no'}>Atras</button>}
            <button onClick={handleInicio} className='hero-title'><h1>{Stats ? 'Pokemones' : 'Volver'}</h1> </button>
            {Stats && paginaSiguiente ? <button  onClick={handleSiguiente} className={paginaSiguiente ? 'boton boton-si' : 'boton boton-no'}>Siguiente</button> : <button   className={paginaPrevia ? 'boton boton-si' : 'boton boton-no'}>Siguiente</button>}
            <script src="https://use.fontawesome.com/da10c666ee.js"></script>
        </div>
     );
}
 
export default Hero;