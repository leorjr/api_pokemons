import { CustomErrorBase } from "../errors/CustomErrorBase";
import { IPokemonRepository } from "../repositorys/IPokemonRepository";
import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IResult } from "../types/IResult";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";
import { makeBattlePokemon, updateInformationsBattle, validatePokemonBattle } from "../utils/battlePokemon";
import { validateCreatePokemonDTO } from "../utils/validateCreatePokemonDTO";
import { validateUpdatePokemonDTO } from "../utils/validateUpdatePokemonDTO";
import { IPokemonService } from "./IPokemonService";

class PokemonService implements IPokemonService {

    constructor(private readonly pokemonRepository: IPokemonRepository) { }

    async list(): Promise<IPokemon[]> {
        const pokemons: IPokemon[] = await this.pokemonRepository.list();
        return pokemons;
    }

    async getById(id: number): Promise<IPokemon> {
        const pokemon: IPokemon | undefined | null = await this.pokemonRepository.getById(id);

        if (!pokemon) {
            throw new CustomErrorBase(404, `pokemon id ${id} not found!`)
        }

        return pokemon;
    }

    async create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon> {

        validateCreatePokemonDTO(createPokemonDTO)

        const pokemon: IPokemon = await this.pokemonRepository
            .create(createPokemonDTO);

        return pokemon;
    }

    async update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void> {

        validateUpdatePokemonDTO(updatePokemonDTO);

        await this.getById(updatePokemonDTO.id);

        await this.pokemonRepository.update(updatePokemonDTO);
    }

    async delete(id: number): Promise<void> {

        await this.getById(id);

        await this.pokemonRepository.delete(id);
    }

    async batalhar(idPokemonA: number, idPokemonB: number): Promise<IResult> {

        validatePokemonBattle(idPokemonA, idPokemonB)

        const pokemonA = await this.getById(idPokemonA)
        const pokemonB = await this.getById(idPokemonB);

        const { winner, loser } = makeBattlePokemon(pokemonA, pokemonB);

        const resultUpdated = await updateInformationsBattle(winner, loser, this.pokemonRepository);

        return resultUpdated
    }
}

export {
    PokemonService
};
