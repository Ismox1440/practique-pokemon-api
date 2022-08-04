import React, { useState} from 'react';


const Navigation = ({ setStats, handleInicio, fetchPokemones,getPokemonData ,getPokemon, setPokemones}) => {


    const [Input, setInput] = useState('');
    




    


    const inputValue = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        
    }

    const buscar = async (e) => {
        
        e.preventDefault();
        const data = await getPokemon('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
        
        

        const promises = await data.results.find(e => e.name === Input.toLowerCase()  )



        if(promises) {
            const results = await getPokemonData(promises.url)
            setStats(false)
            setPokemones([results])
        } else {
            alert('No se encontro el pokemon')
        }


    }

    const handleClick = async (e) => {
        await fetchPokemones(`https://pokeapi.co/api/v2/type/${e.target.id}/`, false)
        setStats(true)
        
    }


   




    return ( 
        <nav className='navegacion'>
            <div className='header'>
                <button onClick={handleInicio} className='titulo'>
                    <p className='titulo-texto'>PokeApi</p>
                </button>
                <div className='busqueda'>
                    <form onSubmit={buscar} action="" className='busqueda-form'>
                        <label htmlFor="">Buscar Pokemon</label>
                        <input onChange={inputValue} className='buscar-input' type="text" name="" id="" value={Input} />
                    </form>
                </div>


                

                
                <div className='botones'>
                <h2>Tipos</h2> 
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    <ul className='botones-lista'>
                        
                        <li id='10' className='nav-link i'><button id='1' onClick={handleClick} className='nav-btn'>normal</button></li>
                        <li className='nav-link i' ><button    id='2' onClick={handleClick} className='nav-btn'>fighting</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='3' className='nav-btn'>flying</button></li>

                        <li className='nav-link i'><button  onClick={handleClick}  id='4' className='nav-btn'>poison</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='5' className='nav-btn'>ground</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='6' className='nav-btn'>rock</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='7' className='nav-btn'>bug</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='8' className='nav-btn'>ghost</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='9' className='nav-btn'>steel</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='10' className='nav-btn'>fire</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='11' className='nav-btn'>water</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='12' className='nav-btn'>grass</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='13' className='nav-btn'>electric</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='14' className='nav-btn'>psychic</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='15' className='nav-btn'>ice</button></li>
                        <li className='nav-link i'><button   onClick={handleClick} id='16' className='nav-btn'>dragon</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='17' className='nav-btn'>dark</button></li>
                        <li className='nav-link i'><button  onClick={handleClick}  id='18' className='nav-btn'>fairy</button></li>

                        
                    </ul>
                </div>
                
            </div>
            
        </nav>
        
     );
}
 
export default Navigation;