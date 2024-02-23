import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IPokemonRepository } from "./IPokemonRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class PokemonRepository implements IPokemonRepository {

    async list(): Promise<IPokemon[]> {
        const pokemons: IPokemon[] = await prisma.pokemon
            .findMany();
        return pokemons;
    }

    async create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon> {
        const pokemon: IPokemon = await prisma.pokemon.create({
            data: {
                tipo: createPokemonDTO.tipo,
                treinador: createPokemonDTO.treinador,
                nivel: 1
            }
        })
        return pokemon;
    }
}

export {
    PokemonRepository
};
