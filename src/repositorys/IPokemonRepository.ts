import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";

interface IPokemonRepository {
    list(): Promise<IPokemon[]>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
}

export {
    IPokemonRepository
};
