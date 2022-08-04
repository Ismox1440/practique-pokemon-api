import React,{useEffect, useState} from 'react';

import './App.css';

import Contenedor from './components/Contenedor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

function App() {

  const [Pokemones, setPokemones] = useState([{name: 'cargandoPoke'}]);
  const [Pagina, setPagina] = useState({previous: 'boton', next: 'boton'});
  const [Stats, setStats] = useState(true);


  const paginaPrevia = Pagina.previous
  const paginaSiguiente = Pagina.next



  const getPokemon = async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {

      const post = await fetch(url)
      const pokemones = await post.json()
      return pokemones

    } catch(error) {
      console.log(error)
    }
  }


  const getPokemonData = async (url) => {
    const data = await fetch(url) 
    const pokemon = await data.json()
    return pokemon
  }

  




  const fetchPokemones = async (url, map = true) => {
    try {
      
      const data = await getPokemon(url)

      const datas = map ? await data.results : await data.pokemon
      console.log(map ? console.log('no') : console.log('tipos1111111111111', datas))

       const promises = datas.map(async pokemon => {
        
        return await map ? getPokemonData(pokemon.url) : getPokemonData(pokemon.pokemon.url);
      }) 

      const results = await Promise.all(promises)
     
      setPokemones(results)
      setPagina(data)
     
      
     


     
    } catch(error) {
      console.log(error)
    }
  }


  


  


  useEffect(() => {
    fetchPokemones()
    
   
    
    
  },[])





  const handleSiguiente = () => {
    fetchPokemones(Pagina.next)
  }
  const handleInicio = () => {
    setStats(true)
    fetchPokemones()
  }
  const handleAtras = () => {
    if(Pagina.previous === null) {
      return
    } else {
      fetchPokemones(Pagina.previous)
    }
  }
  

 


  return (
    <div className="App">
      <Navigation setStats={setStats} handleInicio={handleInicio} fetchPokemones={fetchPokemones} getPokemonData={getPokemonData} getPokemon={getPokemon} Pokemones={Pokemones} setPokemones={setPokemones}/>
      <Hero Stats={Stats} setStats={setStats} paginaSiguiente={paginaSiguiente} paginaPrevia={paginaPrevia} Pagina={Pagina} handleInicio={handleInicio} handleSiguiente={handleSiguiente} handleAtras={handleAtras} />
      {Pokemones[0].name === 'cargandoPoke' ? null : <Contenedor Stats={Stats} setStats={setStats} setPokemones={setPokemones} getPokemonData={getPokemonData} fetchPokemones={fetchPokemones} Pokemones={Pokemones} /> }
      {Stats ? <Hero setStats={setStats} Stats={Stats} paginaSiguiente={paginaSiguiente} paginaPrevia={paginaPrevia} handleSiguiente={handleSiguiente} handleAtras={handleAtras} /> : null}
      <Footer/>
      
      
      

  

      
    </div>
  );
}

export default App;
