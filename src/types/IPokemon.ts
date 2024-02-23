import { Tipo } from "./Tipo"

interface IPokemon {
    id: number
    tipo: Tipo | string
    treinador: string
    nivel: number
}

export {
    IPokemon
}
