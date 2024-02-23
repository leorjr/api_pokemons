import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";

interface IPokemonRepository {
    list(): Promise<IPokemon[]>;
    getById(id: number): Promise<IPokemon | null | undefined>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
}

export {
    IPokemonRepository
};
