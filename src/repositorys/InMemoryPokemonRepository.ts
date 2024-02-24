import { Pokemon } from "@prisma/client";
import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";
import { IPokemonRepository } from "./IPokemonRepository";

class InMemoryPokemonRepository implements IPokemonRepository {

    private readonly pokemons: Pokemon[] = [
        {
            id: 1,
            tipo: "pikachu",
            treinador: "leo",
            nivel: 1
        }
    ];

    private lastId: number = 1;

    async list(): Promise<IPokemon[]> {
        const pokemons: Pokemon[] = await this.pokemons;
        return pokemons;
    }

    async getById(id: number): Promise<IPokemon | null | undefined> {
        const pokemon: IPokemon | null | undefined = this.pokemons
            .find(item => item.id == id)

        return pokemon;
    }

    async create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon> {

        const newPokemon: IPokemon = {
            id: this.lastId + 1,
            tipo: createPokemonDTO.tipo,
            treinador: createPokemonDTO.treinador,
            nivel: 1
        }

        this.pokemons.push(newPokemon)

        this.lastId += 1;

        return newPokemon;
    }

    async update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void> {

        const pokemonIndex: number = this.pokemons
            .findIndex(pokemon => pokemon.id == updatePokemonDTO.id);

        const pokemonToUpdate = this.pokemons[pokemonIndex];

        pokemonToUpdate.treinador = updatePokemonDTO.treinador;

        this.pokemons.splice(pokemonIndex, 1, pokemonToUpdate);
    }

    async delete(id: number): Promise<void> {

        const pokemonIndex: number = this.pokemons
            .findIndex(pokemon => pokemon.id == id);

        this.pokemons.splice(pokemonIndex, 1);
    }

}

export {
    InMemoryPokemonRepository
};
