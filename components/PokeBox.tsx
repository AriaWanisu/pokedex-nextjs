import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PokeData } from "../Models/Pokemon";
import axios from "axios";

interface Props {
  pokemon: any;
  index: number;
  pokeData?: any;
  //   name: string;
}

const PokeBox: NextPage<Props> = ({ pokemon, index }) => {
  const [pokeData, setPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(pokeData);

  useEffect(() => {
    setLoading(true);
    async function fetchApi() {
      await axios.get(pokemon.url).then((res) => {
        setPoke(res.data.types);
      });
    }
    fetchApi();
    setLoading(false);
  }, []);

  let grass =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-green-300 to-emerald-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let poison =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-violet-300 to-purple-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let fire =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-orange-300 to-orange-600 text-white text-l font-bold shadow-md hover:animate-bounce";
  let flying =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-sky-300 to-blue-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let water =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-blue-300 to-blue-700 text-white text-l font-bold shadow-md hover:animate-bounce";
  let bug =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-lime-300 to-lime-600 text-white text-l font-bold shadow-md hover:animate-bounce";
  let normal =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-slate-300 to-slate-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let electric =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-amber-200 to-yellow-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let ground =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-orange-300 to-amber-700 text-white text-l font-bold shadow-md hover:animate-bounce";
  let fairy =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-fuchsia-200 to-pink-400 text-white text-l font-bold shadow-md hover:animate-bounce";
  let fighting =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-rose-200 to-rose-600 text-white text-l font-bold shadow-md hover:animate-bounce";
  let psychic =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-pink-200 to-rose-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let rock =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-orange-200 to-amber-900 text-white text-l font-bold shadow-md hover:animate-bounce";
  let steel =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-slate-300 to-sky-600 text-white text-l font-bold shadow-md hover:animate-bounce";
  let ice =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-teal-100 to-cyan-500 text-white text-l font-bold shadow-md hover:animate-bounce";
  let ghost =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-blue-200 to-indigo-700 text-white text-l font-bold shadow-md hover:animate-bounce";
  let dragon =
    "flex justify-center rounded-lg p-1 bg-gradient-to-br from-sky-300 to-blue-800 text-white text-l font-bold shadow-md hover:animate-bounce";

  return (
    <div key={index}>
      <div className="bg-white rounded p-10 max-w-xs max-h-full">
        <b>
        #
          {(() => {
            if (index + 1 <= 10) return "00" + (index + 1);
            else if (index + 1 <= 100) return "0" + (index + 1);
            else return index + 1;
          })()} {pokemon.name.toUpperCase()}
        </b>
        <button
          className="flex bg-[url('https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-28.jpg')] bg-contain bg-no-repeat bg-center rounded-xl justify-center "
          style={{ marginTop: "0.5rem" }}
        >
          <Link href={`/pokemon/${pokemon.name}`}>
            <a>
              <Image
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  index + 1
                }.png`}
                height={150}
                width={150}
              ></Image>
            </a>
          </Link>
        </button>
        <br />
        <div className="grid grid-cols-2 gap-1 ">
          {pokeData?.map((res, i) => {
            let css = "";
            if (res.type.name === "grass") css = grass;
            if (res.type.name === "poison") css = poison;
            if (res.type.name === "fire") css = fire;
            if (res.type.name === "flying") css = flying;
            if (res.type.name === "water") css = water;
            if (res.type.name === "bug") css = bug;
            if (res.type.name === "normal") css = normal;
            if (res.type.name === "electric") css = electric;
            if (res.type.name === "ground") css = ground;
            if (res.type.name === "fairy") css = fairy;
            if (res.type.name === "fighting") css = fighting;
            if (res.type.name === "psychic") css = psychic;
            if (res.type.name === "rock") css = rock;
            if (res.type.name === "steel") css = steel;
            if (res.type.name === "ice") css = ice;
            if (res.type.name === "ghost") css = ghost;
            if (res.type.name === "dragon") css = dragon;

            return (
              <button key={i} className={css}>
                {res.type.name.toUpperCase()}
              </button>
            );
            // <span key={i} className={"badge-"+res.type.name}>{res.type.name}</span>
            // <span key={i} className="badge-poison">{(res.type.name).toUpperCase()}</span>
          })}
        </div>
      </div>
    </div>
  );
};

export default PokeBox;
