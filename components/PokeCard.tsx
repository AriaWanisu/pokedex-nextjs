import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  grass,
  poison,
  fire,
  flying,
  water,
  bug,
  normal,
  electric,
  ground,
  fairy,
  fighting,
  psychic,
  rock,
  steel,
  ice,
  ghost,
  dragon,
} from "./typeCss";
import { PokeData } from "../Models/Pokemon";

interface Props {
  pokemon: PokeData;
}

const PokeCard: NextPage<Props> = ({ pokemon }) => {
  return (
    <div>
      {" "}
      <div
        className="bg-white text-center rounded-xl border p-8 "
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <b className="font-bold text-xl">
              #{pokemon.id} {pokemon.name.toUpperCase()}
            </b>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-200">
            <Image
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              height={250}
              width={250}
            ></Image>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <b>TYPE: </b>
              {pokemon.types.map((type, index) => {
                let css = "";
                if (type.type.name === "grass") css = grass;
                if (type.type.name === "poison") css = poison;
                if (type.type.name === "fire") css = fire;
                if (type.type.name === "flying") css = flying;
                if (type.type.name === "water") css = water;
                if (type.type.name === "bug") css = bug;
                if (type.type.name === "normal") css = normal;
                if (type.type.name === "electric") css = electric;
                if (type.type.name === "ground") css = ground;
                if (type.type.name === "fairy") css = fairy;
                if (type.type.name === "fighting") css = fighting;
                if (type.type.name === "psychic") css = psychic;
                if (type.type.name === "rock") css = rock;
                if (type.type.name === "steel") css = steel;
                if (type.type.name === "ice") css = ice;
                if (type.type.name === "ghost") css = ghost;
                if (type.type.name === "dragon") css = dragon;
                return <b key={index} className={css}>{type.type.name.toUpperCase()}</b>;
              })}
            </div>
          </div>
        </div>
        <div className="grid justify-items-end">
          <button className="col-end-12 transition ease-in-out delay-150 p-1 rounded text-white text-l bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <Link href="/">
              <a>BACK</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
