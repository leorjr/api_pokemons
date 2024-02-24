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

    static async getById(request: Request, response: Response) {
        const { id } = request.params;

        const pokemon: IPokemon = await pokemonService.getById(Number(id));

        response.status(200).json(pokemon)
    }

    static async create(request: Request, response: Response) {
        const { tipo, treinador } = request.body;

        const pokemon: IPokemon = await pokemonService.create({ tipo, treinador })

        response.status(200).json(pokemon)
    }

    static async update(request: Request, response: Response) {
        const { id } = request.params;
        const { treinador } = request.body;

        await pokemonService.update({ id: Number(id), treinador })

        response.status(204).send()
    }

    static async delete(request: Request, response: Response) {
        const { id } = request.params;

        await pokemonService.delete(Number(id))

        response.status(204).send()
    }

    static async batalhar(request: Request, response: Response) {
        const { idPokemonA, idPokemonB } = request.params;

        const result = await pokemonService.batalhar(Number(idPokemonA), Number(idPokemonB))

        response.status(200).json(result)
    }
}

export {
    PokemonController
};
