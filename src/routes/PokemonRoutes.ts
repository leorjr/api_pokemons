import express from "express"
import { PokemonController } from "../controllers/PokemonController"

const pokemonRouter = express.Router()

pokemonRouter.get('/', PokemonController.list)

export {
    pokemonRouter
}
