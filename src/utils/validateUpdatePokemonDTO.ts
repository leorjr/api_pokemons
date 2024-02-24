import { CustomErrorBase } from "../errors/CustomErrorBase"
import { IUpdatePokemonDTO } from "../types/IUpdatePokemonDTO"

const validateUpdatePokemonDTO = (updatePokemonDTO: IUpdatePokemonDTO) => {

    if (updatePokemonDTO.treinador == "" || updatePokemonDTO.treinador.length < 3) {
        throw new CustomErrorBase(404, "treinador precisa ter, ao menos, 3 caracteres")
    }

}

export {
    validateUpdatePokemonDTO
}
