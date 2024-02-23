import { IPokemon } from "../types/IPokemon";

interface IPokemonRepository {
    list(): Promise<IPokemon[]>;
}

export {
    IPokemonRepository
};
