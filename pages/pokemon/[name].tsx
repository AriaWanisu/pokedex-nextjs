// import { useRouter } from "next/router";
// import { getPokemon } from "../../logic/api/pokemon";
// import { GetServerSideProps } from "next";
// import axios from "axios";

// const pokemon = () => {
//   const router = useRouter();
//   const { name } = router.query;

//   return <p>Post: {name}</p>;
// };

// export async function getServerSideProps({query}) {
//   const { name } = query;
//   const data = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
//   console.log(data);

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

// export default pokemon;
import type { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { getAllPokemon } from "../../logic/api/pokemon";
import { PokeData } from "../../Models/Pokemon";
import PokeCard from "../../components/PokeCard";

interface Props {
  pokemon: PokeData;
}

export async function getStaticPaths() {
  const res: any = await getAllPokemon(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  const paths = res.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

const pokemon: NextPage<Props> = ({ pokemon }) => {
  //   console.log(pokemon);
  //   const router = useRouter();
  //   const { name } = router.query;

  return (
    <div className=" h-screen bg-gradient-to-br from-teal-200 to-emerald-500">
      <div className="flex justify-center">
        <PokeCard pokemon={pokemon} />
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  //   console.log(params);

  const res = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/" + params.name
  );
  const pokemonData = res.data;

  return {
    props: {
      pokemon: pokemonData,
    },
  };
}

export default pokemon;
