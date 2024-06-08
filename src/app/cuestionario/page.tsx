import React from "react";
import Pregunta from "../components/pregunta";
import { preguntas } from "./mockedData";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 w-[80%]">
      <h2 className="text-3xl font-bold">Cuestionario</h2>
      <div className="flex flex-col gap-8">
      {preguntas.map((p) => (
        <Pregunta key={p.pregunta} pregunta={p.pregunta} resp1={p.res1} resp2={p.res2} resp3={p.res3} resp4={p.res4} />
      ))}
      </div>
      <button className="p-1 bg-blue-400 rounded-lg">Enviar</button>
    </div>
  );
};

export default Page;
