import { Request, Response } from "express";
import { PokemonRepository } from "../repositorys/PokemonRepository";
import { PokemonService } from "../services/PokemonService";
import { IPokemon } from "../types/IPokemon";

const pokemonRepository = new PokemonRepository()
const pokemonService = new PokemonService(pokemonRepository)

class PokemonController {
    static async list(request: Request, response: Response) {
        const pokemons: IPokemon[] = await pokemonService.list();

        response.status(200).json(pokemons)
    }

    static async create(request: Request, response: Response) {
        const { tipo, treinador } = request.body;

        const pokemon: IPokemon = await pokemonService.create({ tipo, treinador })

        response.status(200).json(pokemon)
    }
}

export {
    PokemonController
};
