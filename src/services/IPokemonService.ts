import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { IPokemon } from "../types/IPokemon";
import { IResult } from "../types/IResult";
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO";

interface IPokemonService {
    list(): Promise<IPokemon[]>;
    getById(id: number): Promise<IPokemon>;
    create(createPokemonDTO: ICreatePokemonDTO): Promise<IPokemon>;
    update(updatePokemonDTO: IUpdatePokemonDTO): Promise<void>;
    delete(id: number): Promise<void>;
    batalhar(idPokemonA: number, idPokemonB: number): Promise<IResult>;
}

export { IPokemonService };

