import { assert, describe, expect, it } from "vitest";
import { InMemoryPokemonRepository } from "../src/repositorys/InMemoryPokemonRepository";
import { IPokemonService } from "../src/services/IPokemonService";
import { PokemonService } from "../src/services/PokemonService";
import { IPokemon } from "../src/types/IPokemon";

describe('Pokemon tests', async () => {
    let service: IPokemonService;
    service = new PokemonService(new InMemoryPokemonRepository())

    it('Deve listar todos os pokemons cadastrados', async () => {
        const pokemons: IPokemon[] = await service.list();

        assert.isNotNull(pokemons)
        expect(pokemons[0].tipo).toEqual("pikachu")
    })
})