"use client";

import { usePathname } from "next/navigation";
import { python } from "@codemirror/lang-python";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { SetStateAction, useCallback, useState } from "react";
import { problemas } from "../mockedData";
import { useSession } from "next-auth/react";

const Page = () => {
  const path = usePathname();
  const idProblema = path.split("/").pop();
  const problem = problemas.find((p) => p.id === idProblema);
  const [value, setValue] = useState("print('hello world!')");
  const [result, setResult] = useState("");
  const { data: session } = useSession();

  const onChange = useCallback(
    (val: SetStateAction<string>, viewUpdate: any) => {
      setValue(val);
    },
    []
  );

  const updateUserLevel = async () => {
    try {
      const response = await fetch("http://localhost:3003/user/update-level", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResult(`User level updated successfully to ${result.level}`);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.toString());
      } else {
        setResult("An unknown error occurred");
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3003/run-code/analizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo: value,
          idUsuario: session?.user?.email,
          idProblema: idProblema,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setResult(result.join("\n"));
      if (result[0] === "All tests passed successfully.") {
        updateUserLevel();
      }
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.toString());
      } else {
        setResult("An unknown error occurred");
      }
    }
  };

  return !path ? (
    <p>Loading...</p>
  ) : (
    <div className="w-[80%] flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{problem?.problema}</h2>
      <p className="whitespace-break-spaces">{problem?.descripcion}</p>
      <CodeMirror
        theme="dark"
        value={value}
        height="700px"
        extensions={[python()]}
        onChange={onChange}
      />
      <button onClick={handleSubmit} className="p-1 bg-blue-400 rounded-lg">
        Submit
      </button>
      <CodeMirror
        theme="none"
        value={result}
        extensions={[python(), EditorView.editable.of(false)]}
        onChange={onChange}
      />
    </div>
  );
};

export default Page;
