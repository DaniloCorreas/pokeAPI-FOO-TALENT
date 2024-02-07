import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

/*
Este componente se muestra por defecto al acceder a la aplicación, consume la info de la API para mostrar los 10 primeros pokemones, luego los carga en el estado y por medio de un renderizado condicional se muestran al usuario, pudiendo cliquear en ellos para acceder a mas información
*/

export const Pokemones = ({filtros}) => {

    const [pokemones, setPokemones] = useState([])
    const [detallePokemones, setDetallePokemones] = useState([])
    const [filtroActivo, setFiltroActivo] = useState("")
    const filtro = filtros
    

    useEffect(() => {
        const getList = async() => {
            try {
                const resp = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
                const data = await resp.json()
                const urlsList = data.results.map((pokemon)=>{
                    return pokemon.url
                })
                setPokemones(urlsList)
            } catch (error) {
            console.warn(error)
            }
        }
        getList()

    }, [])

    useEffect(() => {

        setFiltroActivo(filtro)

        const infoDetallada = async () => {

            
            const [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9, respuesta10] = await Promise.all(
                [fetch(pokemones[0]), 
                fetch(pokemones[1]),
                fetch(pokemones[2]),
                fetch(pokemones[3]),
                fetch(pokemones[4]),
                fetch(pokemones[5]),
                fetch(pokemones[6]),
                fetch(pokemones[7]),
                fetch(pokemones[8]),
                fetch(pokemones[9])])
    
            const resultado1 = await respuesta1.json()
            const resultado2 = await respuesta2.json()
            const resultado3 = await respuesta3.json()
            const resultado4 = await respuesta4.json()
            const resultado5 = await respuesta5.json()
            const resultado6 = await respuesta6.json()
            const resultado7 = await respuesta7.json()
            const resultado8 = await respuesta8.json()
            const resultado9 = await respuesta9.json()
            const resultado10 = await respuesta10.json()

                
            const preview = [resultado1, 
                resultado2, 
                resultado3, 
                resultado4, 
                resultado5, 
                resultado6, 
                resultado7, 
                resultado8, 
                resultado9, 
                resultado10]

            if (filtroActivo==="numeroAscendente") {
                setDetallePokemones(preview)
            } else if (filtroActivo==="numeroDescendente") {
                const ArregloNumeroDescendente = preview.sort((a,b) => {
                    if (a.order > b.order) {return -1}
                    if (a.order < b.order) {return 1}
                    else return 0
                })
                setDetallePokemones(ArregloNumeroDescendente)

            } else if (filtroActivo==="pesoAscendente") {
                const ArregloPesoAscendente = preview.sort((a,b) => {
                    if (a.weight > b.weight) {return 1}
                    if (a.weight < b.weight) {return -1}
                    else return 0
                })
                setDetallePokemones(ArregloPesoAscendente)
            } else if (filtroActivo==="pesoDescendente") {
                const ArregloPesoDescendente = preview.sort((a,b) => {
                    if (a.weight > b.weight) {return -1}
                    if (a.weight < b.weight) {return 1}
                    else return 0
                })
                setDetallePokemones(ArregloPesoDescendente)

            } else if (filtroActivo==="alturaAscendente") {
                const ArregloAlturaAscendente = preview.sort((a,b) => {
                    if (a.height > b.height) {return 1}
                    if (a.height < b.height) {return -1}
                    else return 0
                })
                setDetallePokemones(ArregloAlturaAscendente)
            } else if (filtroActivo==="alturaDescendente") {
                const ArregloAlturaDescendente = preview.sort((a,b) => {
                    if (a.height > b.height) {return -1}
                    if (a.height < b.height) {return 1}
                    else return 0
                })
                setDetallePokemones(ArregloAlturaDescendente)
            }
        }
    
        infoDetallada()
        
    },)
    

  return (
    <section className="flex flex-wrap gap-8 py-8">
    {detallePokemones.length > 0 && 
    detallePokemones.map((pokemon) => {
        return(
            <NavLink key={pokemon.id} to={`/detail?pokeID=${pokemon.id}`} className="mx-auto flex flex-col w-60 p-5 border-2 border-emerald-700 gap-3 rounded-3xl shadow-lg hover:border-4 hover:cursor-pointer">
                <img src={pokemon.sprites.other.home.front_default} alt="PokeFoto" />
                <h1 className="mx-auto font-extrabold text-2xl">{pokemon.name}</h1>
                <div className="flex space-x-3 mx-auto text-base text-center">
                    <span>Numero: {pokemon.order}</span>
                    <span>Altura: {pokemon.height}</span>
                    <span>Peso: {pokemon.weight}</span>
                </div>
            </NavLink>    
        )
    })
    }
    </section>
  )
}