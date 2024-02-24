import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";

interface IPokemonService {
    list(): Promise<IPokemon[]>;
    getById(id: number): Promise<IPokemon>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
    update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void>;
    delete(id: number): Promise<void>;
}

export { IPokemonService };

