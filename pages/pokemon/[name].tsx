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
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { getAllPokemon } from "../../logic/api/pokemon";
import { PokeData } from "../../Models/Pokemon";

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
        <div
          className="bg-white text-center rounded border p-10 "
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <b className="font-bold text-xl">
                #{pokemon.id} {pokemon.name.toUpperCase()}
              </b>
            </div>
            <div className="col-span-2">
              <Image
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                height={150}
                width={150}
              ></Image>
            </div>
            <div>
              <ul>
                {pokemon.types.map((type, index) => {
                  return <li key={index}>{type.type.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
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
