"use client";
import Link from "next/link";
import UserCard from "./components/UserCard";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="flex flex-col gap-6 items-center justify-center h-full">
          <Image src="/Icons/python.png" alt="Python Logo" width={200} height={200} />
          <UserCard user={session.user} pagetype={"Home"} />
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center justify-center h-full">
          <Image src="/Icons/python.png" alt="Python Logo" width={200} height={200} />
          <h1 className="text-5xl">Bienvenido a <b>Object Learn!</b></h1>
          <p className="text-4xl">Si no estas registrado aun Registrate con Google aqui abajo</p>
          <Link className="p-1 bg-blue-400 rounded-lg" href="/api/auth/signin">Conectarse</Link>
        </div>
      )}
    </>
  );
};

export default Home;
