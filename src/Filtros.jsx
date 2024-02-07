
/*Filtros es el componente que agrupa a todos los botones disponibles para aplicar filtros*/

export const Filtros = ({filtros}) => {

  const [filtro,
    setFiltroNumeroAscendente,
    setFiltroNumeroDescendente,
    setFiltroAlturaAscendente,
    setFiltroAlturaDescendente,
    setFiltroPesoAscendente,
    setFiltroPesoDescendente] = filtros

  return (
    
    <div className='flex justify-end'>
      <p className='my-auto mx-4'>Ordenar por: </p>

      <div className='flex pl-2 py-1 border-2 border-emerald-700 w-28 justify-center rounded-md bg-white m-5'>  
        <div><span className='text-lg'>Numero</span></div>
        <div className='flex flex-col w-4 ml-2'>
          <img src={filtro=="numeroAscendente" ? "/src/assets/up-selected.svg" : "/src/assets/up.svg"} alt="Ascendente" onClick={setFiltroNumeroAscendente}/>
          <img src={filtro=="numeroDescendente" ? "/src/assets/down-selected.svg" : "/src/assets/down.svg"} alt="Descendente" onClick={setFiltroNumeroDescendente}/>

        </div>
      </div>

      <div className='flex pl-2 py-1 border-2 border-emerald-700 w-24 justify-center rounded-md bg-white m-5'>  
        <div><span className='text-lg'>Altura</span></div>
        <div className='flex flex-col w-4 ml-2'>
          <img src={filtro=="alturaAscendente" ? "/src/assets/up-selected.svg" : "/src/assets/up.svg"} alt="Ascendente" onClick={setFiltroAlturaAscendente}/>
          <img src={filtro=="alturaDescendente" ? "/src/assets/down-selected.svg" : "/src/assets/down.svg"} alt="Descendente" onClick={setFiltroAlturaDescendente}/>
        </div>
      </div>

      <div className='flex pl-2 py-1 border-2 border-emerald-700 w-24 justify-center rounded-md bg-white m-5'>
        <div><span className='text-lg'>Peso</span></div>
        <div className='flex flex-col w-4 ml-2'>
          <img src={filtro=="pesoAscendente" ? "/src/assets/up-selected.svg" : "/src/assets/up.svg"} alt="Ascendente" onClick={setFiltroPesoAscendente}/>
          <img src={filtro=="pesoDescendente" ? "/src/assets/down-selected.svg" : "/src/assets/down.svg"} alt="Descendente" onClick={setFiltroPesoDescendente}/>
        </div>
      </div>

    </div>
  )
}
