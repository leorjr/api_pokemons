import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";

interface IPokemonService {
    list(): Promise<IPokemon[]>;
    getById(id: number): Promise<IPokemon>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
}

export { IPokemonService };

