import axios from "axios";

export async function getAllPokemon(url: string) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => resolve(res.data))
    })
}

export async function getPokemon(url: string) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => resolve(res))
    })
}
