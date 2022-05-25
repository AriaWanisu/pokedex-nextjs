// export interface PokemonV2Type {
//     name: string;
// }

// export interface PokemonV2Pokemontypes {
//     pokemon_v2_type: PokemonV2Type;
// }

// export interface PokemonV2Pokemon {
//     id: number;
//     name: string;
//     pokemon_v2_pokemontypes: PokemonV2Pokemontypes[];
// }

// export interface Poke {
//     pokemon_v2_pokemon: PokemonV2Pokemon[];
// }

export interface pokemon {
    name: string;
    url: string;
}

export interface poke {
    count: number;
    next?: any;
    previous?: any;
    results: pokemon[];
}
