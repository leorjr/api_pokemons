import express from "express"
import { PokemonController } from "../controllers/PokemonController"
import { wrapAction } from "../utils/wrapAction"

const pokemonRouter = express.Router()

pokemonRouter.get('/', wrapAction(PokemonController.list))
pokemonRouter.post('/', wrapAction(PokemonController.create))

export {
    pokemonRouter
}
