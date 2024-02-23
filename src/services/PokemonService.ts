import { IPokemonRepository } from "../repositorys/IPokemonRepository";
import { IPokemon } from "../types/IPokemon";
import { IPokemonService } from "./IPokemonService";

class PokemonService implements IPokemonService {

    constructor(private readonly pokemonRepository: IPokemonRepository) { }

    async list(): Promise<IPokemon[]> {
        const pokemons: IPokemon[] = await this.pokemonRepository.list();
        return pokemons;
    }
}

export {
    PokemonService
};
