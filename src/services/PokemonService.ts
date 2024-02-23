import { IPokemonRepository } from "../repositorys/IPokemonRepository";
import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { validateCreatePokemonDTO } from "../utils/validateCreatePokemonDTO";
import { IPokemonService } from "./IPokemonService";

class PokemonService implements IPokemonService {

    constructor(private readonly pokemonRepository: IPokemonRepository) { }


    async list(): Promise<IPokemon[]> {
        const pokemons: IPokemon[] = await this.pokemonRepository.list();
        return pokemons;
    }

    async create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon> {

        validateCreatePokemonDTO(createPokemonDTO)

        const pokemon: IPokemon = await this.pokemonRepository
            .create(createPokemonDTO);

        return pokemon;
    }
}

export {
    PokemonService
};
