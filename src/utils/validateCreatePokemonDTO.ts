import { CustomErrorBase } from "../errors/CustomErrorBase";
import { ICreatePokemonDTO } from "../types/ICreatePokemonDTO";
import { Tipo } from "../types/Tipo";

const validateCreatePokemonDTO = (createPokemonDTO: ICreatePokemonDTO) => {
    if (!Object.values(Tipo).includes(createPokemonDTO.tipo)) {
        throw new CustomErrorBase(404, "tipo só pode ser charizard | mewtwo | pikachu")
    }

    if (createPokemonDTO.treinador == "" || createPokemonDTO.treinador.length < 3) {
        throw new CustomErrorBase(404, "treinador precisa ter, ao menos, 3 caracteres")
    }
}

export {
    validateCreatePokemonDTO
};
