import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokeBox from "../components/PokeBox";
import { poke, pokemon } from "../Models/ListPokemon";
import axiosInstance from "../logic/api/axiosIntance";

interface Props {
  posts: pokemon[];
}

const Home: NextPage<Props> = ({ posts }) => {
  // console.log(posts);

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
  await axiosInstance
    .get("/pokemon?limit=151&offset=0")
    .then((res) => (pokemonlist = res.data.results));

  return {
    props: {
      posts: pokemonlist,
    },
  };
}

export default Home;
