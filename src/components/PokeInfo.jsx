import React from 'react';


const PokeInfo = ({Pokemones}) => {

    


    return ( 
        <div className='contenedor-info'>
            <div className="imagen">
                <img src={Pokemones[0].sprites.other.home.front_default} alt="" />
            </div>
            <div className="container-info">

            <div className="card-info card-info-uno">
                <h3>{Pokemones[0].name}</h3>
              
                <div className='tipos-texto'><p className={`card-tipo tipo-${Pokemones[0].types[0].type.name}`}>{Pokemones[0].types[0].type.name }</p>{Pokemones[0].types[1] ? <p className={`card-tipo tipo-${Pokemones[0].types[1].type.name}`}>{Pokemones[0].types[1].type.name }</p> : null} </div>
                
            </div>


            <div className="card-estadisticas estadistica-info">
                <h4>Estadisticas</h4>
                <ul className='card-lista lista-info'>
                    <li className='card-lista--item item-info'><p>Vida</p><progress className='barra' max='100' value={Pokemones[0].stats[0].base_stat}></progress></li>
                    <li className='card-lista--item item-info'><p>Speed</p> <progress className='barra' max='100' value={Pokemones[0].stats[5].base_stat}></progress></li>
                    <li className='card-lista--item item-info'><p>Defensa</p> <progress className='barra' max='100' value={Pokemones[0].stats[2].base_stat}></progress></li>
                    <li className='card-lista--item item-info'><p>Ataque</p> <progress className='barra' max='100' value={Pokemones[0].stats[1].base_stat}></progress></li>
                    <li className='card-lista--item item-info'><p>Ataque Especial</p> <progress className='barra' max='100' value={Pokemones[0].stats[3].base_stat}></progress></li>
                    <li className='card-lista--item item-info'><p>Defensa Especial</p> <progress className='barra' max='100' value={Pokemones[0].stats[4].base_stat}></progress></li>
                </ul>
            </div>
           
            </div>
        </div>
     );
}
 
export default PokeInfo;