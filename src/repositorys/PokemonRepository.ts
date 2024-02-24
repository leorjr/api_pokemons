import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";
import { IPokemonRepository } from "./IPokemonRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class PokemonRepository implements IPokemonRepository {

    async list(): Promise<IPokemon[]> {
        let pokemons: IPokemon[] = await prisma.pokemon
            .findMany();

        return pokemons;
    }

    async getById(id: number): Promise<IPokemon | null> {
        const pokemon: IPokemon | null = await prisma.pokemon
            .findUnique({ where: { id } })

        return pokemon;
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

    async update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void> {

        const pokemonUpdated = await prisma.pokemon.update({
            where: {
                id: updatePokemonDTO.id
            },
            data: {
                treinador: updatePokemonDTO.treinador
            }
        })
    }

    async delete(id: number): Promise<void> {

        await prisma.pokemon.delete({
            where: {
                id
            }
        })
    }
}

export {
    PokemonRepository
};
