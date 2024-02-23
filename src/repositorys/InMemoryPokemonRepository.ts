import { Pokemon } from "@prisma/client";
import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
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

    getNextIndex(): number {
        const currentIndex = this.pokemons[this.pokemons.length - 1].id;
        return currentIndex + 1
    }

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
            id: this.getNextIndex(),
            tipo: createPokemonDTO.tipo,
            treinador: createPokemonDTO.treinador,
            nivel: 1
        }

        this.pokemons.push(newPokemon)

        return newPokemon;
    }

}

export {
    InMemoryPokemonRepository
};
