import Card from "./Card";
import PokeInfo from "./PokeInfo";
import React from 'react';


const Contenedor = ({ Stats,setStats,setPokemones,getPokemonData,fetchPokemones,Pokemones}) => {

    



    return ( 
        <div className={Stats ? "contenedor" : 'contenedors'} >
            


        { Stats ? Pokemones.map(e => {
            return <Card setPokemones={setPokemones} getPokemonData={getPokemonData} fetchPokemones={fetchPokemones} setStats={setStats} key={e.id} Pokemones={e}/>
        }) : <PokeInfo Pokemones={Pokemones} /> }

        </div>
     );
}
 
export default Contenedor;