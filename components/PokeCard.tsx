import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
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
            <div className="grid grid-cols-3">
              <b>TYPE: </b>
              {pokemon.types.map((type, index) => {
                return <b key={index}>{type.type.name.toUpperCase()}</b>;
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
