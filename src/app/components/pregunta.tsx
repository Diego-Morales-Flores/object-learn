"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Form } from "../cuestionario/page";

interface PreguntaProps {
  pregunta: string;
  resp1: string;
  resp2: string;
  resp3: string;
  resp4: string;
  onChange: Dispatch<SetStateAction<Form>>;
}

const Pregunta = (props: PreguntaProps) => {
  const { pregunta, resp1, resp2, resp3, resp4, onChange } = props;
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    onChange(
      (prev: Form) => ({ ...prev, [pregunta]: event.target.value } as Form)
    );
  };

  return (
    <div className="flex flex-col gap-4 border-2 border-gray-700 p-3 rounded">
      <h1 className="text-xl font-bold">{pregunta}</h1>
      <div className="grid grid-cols-2 gap-5">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            value="1"
            checked={selectedOption === "1"}
            onChange={handleChange}
          />
          {resp1}
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            value="2"
            checked={selectedOption === "2"}
            onChange={handleChange}
          />
          {resp2}
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            value="3"
            checked={selectedOption === "3"}
            onChange={handleChange}
          />
          {resp3}
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="radio"
            value="4"
            checked={selectedOption === "4"}
            onChange={handleChange}
          />
          {resp4}
        </label>
      </div>
    </div>
  );
};

export default Pregunta;
