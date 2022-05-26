import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokeBox from "../components/PokeBox";
import { poke, pokemon } from "../Models/ListPokemon";
import { getAllPokemon, getPokemon } from "../logic/api/pokemon";

interface Props {
  posts: pokemon[];
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);

  return (
    <div className="flex justify-center bg-gradient-to-br from-teal-200 to-emerald-500">
      <div
        className="grid md:grid-cols-5 gap-4 sm:grid-cols-3 "
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        {posts.map((res, index) => {
          return <PokeBox key={index} pokemon={res} index={index}/>;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let pokemonlist: any;
  let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  const loadingPokemon = async (data) => {
    let pokeData = await Promise.all(
      data.map(async (pokemon) => {
        let pokeRecord: any = await getPokemon(pokemon.url);
        return pokeRecord.data;
      })
    );
    pokemonlist = pokeData;
  };

  let res: any = await getAllPokemon(url);
  // await loadingPokemon(res.results);
  pokemonlist = res.results;
  return {
    props: {
      posts: pokemonlist,
    },
  };
}

export default Home;
