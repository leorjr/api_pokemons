import { assert, describe, expect, it } from "vitest";
import { InMemoryPokemonRepository } from "../src/repositorys/InMemoryPokemonRepository";
import { IPokemonService } from "../src/services/IPokemonService";
import { PokemonService } from "../src/services/PokemonService";
import { ICreatePokemonDTO } from "../src/types/ICreatePokemonDTO";
import { IPokemon } from "../src/types/IPokemon";
import { IUpdatePokemonDTO } from "../src/types/IUpdatePokemonDTO";
import { Tipo } from "../src/types/Tipo";

describe('Pokemon Service', async () => {
    let service: IPokemonService;
    service = new PokemonService(new InMemoryPokemonRepository())

    it('Deve listar todos os pokemons cadastrados', async () => {
        const pokemons: IPokemon[] = await service.list();

        assert.isNotNull(pokemons)
        expect(pokemons[0].tipo).toEqual("pikachu")
    })

    it('Deve retornar um pokemon pelo id', async () => {
        const id: number = 1;

        const receivedPokemon = await service.getById(id)

        assert.equal(receivedPokemon.id, id)
    })

    it('Deve retornar um erro quando não localizado pokemon pelo id', async () => {
        const id: number = 2;

        await expect(service.getById(id))
            .rejects
            .toThrowError(`pokemon com id 2 não encontrado!`);
    })

    it('Deve cadastrar um novo pokemon', async () => {

        const pokemonExpected: IPokemon = {
            id: 2,
            tipo: "charizard",
            treinador: "teste",
            nivel: 1
        }

        const createPokemonDTO: ICreatePokemonDTO = {
            tipo: Tipo.CHARIZARD,
            treinador: "teste"
        }


        const pokemonCreated: IPokemon = await service
            .create(createPokemonDTO);

        assert.isNotNull(pokemonCreated)
        expect(pokemonCreated.id).toEqual(pokemonExpected.id)
    })

    it('Não deve cadastrar um novo pokemon com um treinador vazio', async () => {

        const createPokemonDTO: ICreatePokemonDTO = {
            tipo: Tipo.CHARIZARD,
            treinador: ""
        }

        await expect(service.create(createPokemonDTO))
            .rejects
            .toThrowError('treinador precisa ter, ao menos, 3 caracteres');
    })

    it('Não deve cadastrar um novo pokemon com um treinador com menos de 3 letras', async () => {

        const createPokemonDTO: ICreatePokemonDTO = {
            tipo: Tipo.CHARIZARD,
            treinador: "te"
        }

        await expect(service.create(createPokemonDTO))
            .rejects
            .toThrowError('treinador precisa ter, ao menos, 3 caracteres');
    })

    it('Não deve cadastrar um novo pokemon com um tipo não permitido', async () => {

        const createPokemonDTO: ICreatePokemonDTO = {
            tipo: "",
            treinador: "teste"
        }

        await expect(service.create(createPokemonDTO))
            .rejects
            .toThrowError('tipo só pode ser charizard | mewtwo | pikachu');
    })

    it('Deve atualizar o pokemon com sucesso', async () => {

        const updatePokemonDTO: IUpdatePokemonDTO = {
            id: 1,
            treinador: "teste"
        }

        await service
            .update(updatePokemonDTO)

        const pokemonUpdated: IPokemon = await service
            .getById(updatePokemonDTO.id)

        expect(pokemonUpdated.treinador)
            .toEqual(updatePokemonDTO.treinador)
    })

    it('Não deve atualizar o pokemon com treinador vazio', async () => {

        const updatePokemonDTO: IUpdatePokemonDTO = {
            id: 1,
            treinador: ""
        }


        await expect(service.update(updatePokemonDTO))
            .rejects
            .toThrowError('treinador precisa ter, ao menos, 3 caracteres');
    })

    it('Não deve atualizar o pokemon com treinador com menos de 3 letras', async () => {

        const updatePokemonDTO: IUpdatePokemonDTO = {
            id: 1,
            treinador: "ab"
        }


        await expect(service.update(updatePokemonDTO))
            .rejects
            .toThrowError('treinador precisa ter, ao menos, 3 caracteres');
    })

    it('Não deve atualizar o pokemon com id não localizado', async () => {

        const updatePokemonDTO: IUpdatePokemonDTO = {
            id: 5,
            treinador: "teste"
        }


        await expect(service.update(updatePokemonDTO))
            .rejects
            .toThrowError('pokemon com id 5 não encontrado!');
    })

    it('Deve deletar o pokemon com sucesso', async () => {

        const id: number = 1

        await service
            .delete(id)

        await expect(service.getById(id))
            .rejects
            .toThrowError('pokemon com id 1 não encontrado!');
    })

    it('Não deve deletar o pokemon com id não localizado', async () => {

        const id: number = 2

        await service
            .delete(id)

        await expect(service.getById(id))
            .rejects
            .toThrowError('pokemon com id 2 não encontrado!');
    })

})