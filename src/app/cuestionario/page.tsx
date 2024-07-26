"use client";
import React, { useState } from "react";
import Pregunta from "../components/pregunta";
import { preguntas } from "./mockedData";
import { useRouter } from "next/navigation";

export interface Form {
  [key: string]: number;
}

const Page = () => {
  const [form, setForm] = useState<Form>({});
  const router = useRouter();

  const getPuntage = () => {
    let puntaje = 0;
    preguntas.forEach((p) => {
      if (form[p.pregunta] == p.sol) {
        puntaje++;
      }
    });
    console.log(puntaje + "/" + preguntas.length);
    puntaje <= 10 ? alert("Necesita Mejora") : {};
    puntaje > 10 && puntaje < 25 ? alert("Competente") : {};
    puntaje >= 25 ? alert("Sobresaliente") : {};
  };

  return (
    <div className="flex flex-col gap-4 w-[80%]">
      <h2 className="text-3xl font-bold">Cuestionario</h2>
      <div className="flex flex-col gap-8">
        {preguntas.map((p, index) => (
          <>
            <b>{index}</b>
            <Pregunta
              key={p.pregunta}
              pregunta={p.pregunta}
              resp1={p.res1}
              resp2={p.res2}
              resp3={p.res3}
              resp4={p.res4}
              onChange={setForm}
            />
          </>
        ))}
      </div>
      <button
        onClick={() => {
          getPuntage();
          router.push("/problema");
        }}
        className="p-1 bg-blue-400 rounded-lg"
      >
        Enviar
      </button>
    </div>
  );
};

export default Page;
