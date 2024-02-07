import './App.css'
import {Route, Routes} from 'react-router-dom';
import { useFilter } from '../Hooks/useFilter';

//Componentes
import { Filtros } from './Filtros'
import { Pokemones } from './Pokemones';
import { DetailPage } from './DetailPage';

/*
Utilice un customHook "useFilter" para manejar lo relacionado a la barra de filtros, este hook recibe los eventos, luego modifica los estados necesarios y de él se nutre el componente "Filtros.jsx" para cambiar el color de las flechas cuando son seleccionadas.
Debido al apuro en terminar la prueba no me percaté que luego ese hook deberia compartirse a los componentes que lo usarian y en vez de crear un Contexto decidi pasarlos por props ya que era un proyecto muy pequeño, solucionando  asi mi necesidad pero claramente no de la forma mas óptima.

Rutas dinamicas: utilice React-Router para el rooteo de la aplicación
*/



function App() {

  const {filtro,
    setFiltroNumeroAscendente,
    setFiltroNumeroDescendente,
    setFiltroAlturaAscendente,
    setFiltroAlturaDescendente,
    setFiltroPesoAscendente,
    setFiltroPesoDescendente} = useFilter()

  return (
    <div className='container mx-auto mt-5'>
      <div className='bg-emerald-500 h-16'>
        <img className="h-16 mx-auto" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
      </div>

      <Routes>
        <Route path="/" 
        element={
          <>
            <Filtros filtros={[filtro,
              setFiltroNumeroAscendente,
              setFiltroNumeroDescendente,
              setFiltroAlturaAscendente,
              setFiltroAlturaDescendente,
              setFiltroPesoAscendente,
              setFiltroPesoDescendente]}/>  
            <Pokemones filtros={filtro}/>
          </>
        }>
        </Route>
        <Route path="/detail" 
        element={<DetailPage/>}>
        </Route>

      </Routes>

    </div>
    
  )
}

export default App
