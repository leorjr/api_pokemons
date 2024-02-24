import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";

interface IPokemonRepository {
    list(): Promise<IPokemon[]>;
    getById(id: number): Promise<IPokemon | null | undefined>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
    update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void>;
    delete(id: number): Promise<void>;
    updateLevel(id: number, novoNivel: number): Promise<void>;
}

export {
    IPokemonRepository
};
