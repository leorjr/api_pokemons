import { IPokemon } from "../types/IPokemon";

interface IPokemonService {
    list(): Promise<IPokemon[]>;
}

export {
    IPokemonService
};
