import { CustomErrorBase } from "../errors/CustomErrorBase";
import { IPokemonRepository } from "../repositorys/IPokemonRepository";
import { IPokemon } from "../types/IPokemon";


const validatePokemonBattle = (idPokemonA: number, idPokemonB: number) => {
    if (idPokemonA == idPokemonB) {
        throw new CustomErrorBase(404, "You need to pass two differents ids")
    }
}

const makeBattlePokemon = (pokemonA: IPokemon, pokemonB: IPokemon) => {
    const probability1 = pokemonA.nivel / (pokemonA.nivel + pokemonB.nivel);

    const winner = Math.random() < probability1 ? pokemonA : pokemonB;
    const loser = winner === pokemonA ? pokemonB : pokemonA;

    return {
        winner,
        loser
    };
}

const updateInformationsBattle = async (winner: IPokemon, loser: IPokemon, repository: IPokemonRepository) => {
    winner.nivel += 1;
    loser.nivel -= 1;

    if (loser.nivel == 0) {
        await repository.delete(loser.id);
    }

    await repository.updateLevel(winner.id, winner.nivel);

    return {
        "vencedor": winner,
        "perdedor": loser
    }
}



export {
    makeBattlePokemon, updateInformationsBattle, validatePokemonBattle
};

