import { IPokemon } from "../types/IPokemon";
import { IPokemonRepository } from "./IPokemonRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class PokemonRepository implements IPokemonRepository {

    async list(): Promise<IPokemon[]> {
        const pokemons: IPokemon[] = await prisma.pokemon.findMany();
        return pokemons;
    }
}

export {
    PokemonRepository
};
