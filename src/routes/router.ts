import { Express } from "express"
import { pokemonRouter } from "./PokemonRoutes"

const router = (app: Express) => {
    app.use('/pokemons', pokemonRouter)
}

export {
    router
}
