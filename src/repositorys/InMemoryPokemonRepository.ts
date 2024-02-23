import { Pokemon } from "@prisma/client";
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

    async list(): Promise<IPokemon[]> {
        const pokemons: Pokemon[] = await this.pokemons;
        return pokemons;
    }

}

export {
    InMemoryPokemonRepository
};
