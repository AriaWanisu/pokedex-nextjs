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
import { PokemonSpecies } from "../Models/PokemonSpecies";
import { useState } from "react";

interface Props {
  pokemon: PokeData;
  species: PokemonSpecies;
}

const PokeCard: NextPage<Props> = ({ pokemon, species }) => {
  const [isAbi, setIsAbi] = useState(false);

  return (
    <div>
      <div
        className="bg-white rounded-xl border p-8 drop-shadow-2xl "
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 text-center">
            <b className="font-bold text-xl ">
              #
              {(() => {
                if (pokemon.id <= 10) return "00" + pokemon.id;
                else if (pokemon.id <= 100) return "0" + pokemon.id;
                else return pokemon.id;
              })()}{" "}
              {pokemon.name.toUpperCase()}
            </b>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 grid-flow-col gap-3">
          <div className="bg-slate-200 rounded-xl shadow-lg">
            <Image
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              height={250}
              width={250}
            ></Image>
          </div>
          <div>
            <div className="grid grid-rows-6 grid-flow-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                <b className="flex justify-start">Type: </b>
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
                  return (
                    <span key={index} className={css}>
                      {type.type.name.toUpperCase()}
                    </span>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-2 justify-items-start">
                {pokemon.height ? (
                  <div>
                    <b>Height: </b>{" "}
                    <span>{(pokemon.height / 10).toFixed(1)} m</span>
                  </div>
                ) : (
                  <></>
                )}
                {pokemon.weight ? (
                  <div>
                    <b>Weight: </b> {(pokemon.weight / 10).toFixed(1)} kg
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex items-start">
                <div>
                  <b>Category: </b> {species.genera[7].genus}
                </div>
              </div>
              <div className="row-span-2 grid grid-cols-2 justify-items-start">
                <div>
                  <b>Abilities: </b>
                </div>
                <ul className="list-disc" onClick={() => setIsAbi(!isAbi)}>
                  {pokemon.abilities.map((ability, index) => {
                    const arr = ability.ability.name.split("-");
                    for (var i = 0; i < arr.length; i++) {
                      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    }
                    const str = arr.join(" ");
                    return (
                      <li key={index}>
                        <button>{str}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {isAbi ? (
                <div className="bg-slate-200 p-1">
                  <div>Ability detail here</div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <br />
          </div>
        </div>

        <div className="grid justify-items-end">
          <Link href="/">
            <a>
              <button className="w-20 col-end-12 transition ease-in-out delay-150 p-1 rounded text-white text-l bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-md">
                BACK
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
