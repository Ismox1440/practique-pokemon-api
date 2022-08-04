import React from 'react';



const Card =   ({ setPokemones,getPokemonData,Pokemones, setStats}) => {


    


    const handleClick = async (e) => {
        setStats(false)
        const data = await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${e.currentTarget.id}/`)
        setPokemones([data])
    }



    



    return  ( 
        <div  className={`card card-${Pokemones.types[0].type.name}`} >
            <a  id={Pokemones.id} onClick={handleClick} className="card-container">
            <div  className="imagen">
                <img src={Pokemones.sprites.other.home.front_default} alt="" />
            </div>

            <div className="card-info">
                <h3>{Pokemones.name[0].toUpperCase() + Pokemones.name.substring(1)}</h3>
                {Pokemones.types[1] ? <div className='tipos-texto'><p className={`card-tipo tipo-${Pokemones.types[0].type.name}`}>{Pokemones.types[0].type.name }</p><p className={`card-tipo tipo-${Pokemones.types[1].type.name}`}>{Pokemones.types[1].type.name }</p> </div> :<p className={`card-tipo tipo-${Pokemones.types[0].type.name}`}>{Pokemones.types[0].type.name }</p>  }
            </div>


            <div className="card-estadisticas">
                <ul className='card-lista'>
                    <li className='card-lista--item'><p>Vida</p><progress className='barra' max='100' value={Pokemones.stats[0].base_stat}></progress></li>
                    <li className='card-lista--item'><p>Speed</p> <progress className='barra' max='100' value={Pokemones.stats[5].base_stat}></progress></li>
                    <li className='card-lista--item'><p>Defensa</p> <progress className='barra' max='100' value={Pokemones.stats[2].base_stat}></progress></li>
                    <li className='card-lista--item'><p>Ataque</p> <progress className='barra' max='100' value={Pokemones.stats[1].base_stat}></progress></li>
                </ul>
            </div>

            </a>

        </div>
     );
}
 
export default Card;