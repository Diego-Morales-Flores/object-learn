"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="bg-white p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/" className={`${path==="/"&&"border-b-4 border-blue-400"} text-gray-600`}>Inicio</Link>
        </li>
        <li>
          <Link href="/api/auth/signin" className="text-gray-600">Conectarse</Link>
        </li>
        <li>
          <Link href="/api/auth/signout" className="text-gray-600">Desconectarse</Link>
        </li>
        <li>
          <Link href="/python-bases" className={`${path==="/python-bases"&&"border-b-4 border-blue-400"} text-gray-600`}>Python conceptos básicos</Link>
        </li>
        {/* <li>
          <Link href="/abstraccion">Abstraccion</Link>
        </li>
        <li>
          <Link href="/encapsulamiento">Encapsulamiento</Link>
        </li>
        <li>
          <Link href="/herencia">Herencia</Link>
        </li>
        <li>
          <Link href="/polimorfirsmo">Polimorfirsmo</Link>
        </li> */}
        <li>
          <Link href="/cuestionario" className={`${path==="/cuestionario"&&"border-b-4 border-blue-400"} text-gray-600`}>Cuestionario</Link>
        </li>
        <li>
          <Link href="/problema"className={`${path.startsWith("/problema") && "border-b-4 border-blue-400"} text-gray-600 `}>Problemas</Link>
        </li>
      </ul>
    </nav>
  );
}
