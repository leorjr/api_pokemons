import express from "express"
import { PokemonController } from "../controllers/PokemonController"
import { wrapAction } from "../utils/wrapAction"

const pokemonRouter = express.Router()

pokemonRouter.get('/', wrapAction(PokemonController.list))
pokemonRouter.get('/:id', wrapAction(PokemonController.getById))
pokemonRouter.post('/', wrapAction(PokemonController.create))
pokemonRouter.put('/:id', wrapAction(PokemonController.update))
pokemonRouter.delete('/:id', wrapAction(PokemonController.delete))
pokemonRouter.post('/batalhar/:idPokemonA/:idPokemonB', wrapAction(PokemonController.batalhar))

export {
    pokemonRouter
}
