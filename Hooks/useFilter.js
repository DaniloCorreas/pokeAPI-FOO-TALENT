import { useState } from "react"

export const useFilter = () => {

    const [filtro, setFiltro] = useState("numeroAscendente")

    const setFiltroNumeroAscendente = () => {
        setFiltro("numeroAscendente")
    }
    const setFiltroNumeroDescendente = () => {
        setFiltro("numeroDescendente")
    }
    const setFiltroAlturaAscendente = () => {
        setFiltro("alturaAscendente")
    }
    const setFiltroAlturaDescendente = () => {
        setFiltro("alturaDescendente")
    }
    const setFiltroPesoAscendente = () => {
        setFiltro("pesoAscendente")
    }
    const setFiltroPesoDescendente = () => {
        setFiltro("pesoDescendente")
    }
    

  return {
    filtro,
    setFiltroNumeroAscendente,
    setFiltroNumeroDescendente,
    setFiltroAlturaAscendente,
    setFiltroAlturaDescendente,
    setFiltroPesoAscendente,
    setFiltroPesoDescendente
  }
}
