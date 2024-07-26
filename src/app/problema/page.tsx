import Link from "next/link";
import React from "react";
import { problemas } from "./mockedData";

const Page = () => {
  return (
    <div className="w-[80%] flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Problemas</h2>
      <ul className="flex flex-col gap-1">
        {problemas.map((p) => (
          <Link key={p.id} href={`/problema/${p.id}`} className="font-bold">
            <li className="grid gap-4 grid-cols-[auto_1fr_auto] hover:bg-gray-600 py-1 px-3 rounded-lg items-center">
              {p.id}.- {p.problema}
              <div className="flex items-center gap-1">
                {p.tag.split(", ").map((t) => (
                  <div key={t} className="bg-amber-200 text-black p-1 rounded">
                    {t}
                  </div>
                ))}
              </div>
              <div>{p.dificultad}⭐</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
