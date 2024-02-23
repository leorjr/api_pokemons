import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { IPokemon } from "../types/IPokemon";


const prisma = new PrismaClient();

class PokemonController {
    static async list(request: Request, response: Response) {
        const pokemons: IPokemon[] = await prisma.pokemon.findMany();

        response.status(200).json(pokemons)
    }
}

export {
    PokemonController
};
