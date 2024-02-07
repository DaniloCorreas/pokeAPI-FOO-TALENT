import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

/*
Este componente es el encargado de mostrar la info detallada de las ESTADISTICAS del pokemos, debido al corto tiempo decidi solo mostrar eso porque el resto de info relevante se encuentrar en el listado de pokemones.
Al renderizarse recibe por la URL el id del Pokemon que se cliqueo y con ello hace una consulta asincrona a la API, obteniendo asi las estadisticas que luego por medio de un renderizado condicional se muestran al usuario.
*/

export const DetailPage = () => {

    const [poke, setPoke] = useState({})

    const query = new URLSearchParams(window.location.search)
        const pokeID = query.get('pokeID')
        console.log(pokeID)

    useEffect(() => {
        
        const getPoke = async() => {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
                const data = await resp.json()
                setPoke(data)
                console.log(data)
            } catch (error) {
            console.warn(error)
            }
        }
        getPoke()

    }, [])
    
    


  return (
    <>
    {Object.keys(poke).length !== 0 &&
    <div>
        <div className="flex flex-row flex-wrap justify-center gap-8 my-16">
        <div className="w-80 flex flex-col" >
            <h1 className="text-3xl font-bold uppercase mx-auto">{poke.name}</h1>
            <img src={poke.sprites.other.home.front_default} alt="Pokemon" />
        </div>
        <div className="text-2xl my-auto w-80">
            <h1 className="text-3xl font-bold mb-4" >Estadísticas:</h1>
            <div className="flex justify-between">
            <ul className="mt-5">
                <li>Puntos de Resistencia:</li>
                <li>Puntos de Ataque:</li>
                <li>Puntos de Defensa:</li>
                <li>Ataque Especial:</li>
                <li>Defensa Especial:</li>
                <li>Velocidad:</li>
            </ul>
            <ul className="mt-5">
                <li className="font-bold text-emerald-800 text-center">{poke.stats[0].base_stat}</li>
                <li className="font-bold text-emerald-800 text-center">{poke.stats[1].base_stat}</li>
                <li className="font-bold text-emerald-800 text-center">{poke.stats[2].base_stat}</li>
                <li className="font-bold text-emerald-800 text-center">{poke.stats[3].base_stat}</li>
                <li className="font-bold text-emerald-800 text-center">{poke.stats[4].base_stat}</li>
                <li className="font-bold text-emerald-800 text-center">{poke.stats[5].base_stat}</li>
            </ul>
            </div>
        </div>
        </div>
        <NavLink to="/"><button className=" flex border-2 hover:border-4 p-2 my-5 shadow-lg rounded-lg border-emerald-700 mx-auto">Volver al Listado</button></NavLink>
    </div> 
    }  
</>
)}
