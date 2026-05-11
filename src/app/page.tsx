import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {
        //text color
      }
      <p className="text-red-500">Tailwind is awesome</p>
      <p className="text-green-100">Tailwind is awesome</p>
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-white">Tailwind is awesome</p>
      <p className="text-zink-500">Tailwind is awesome</p>
      <p className="text-slate-800">Tailwind is awesome</p>
      <p className="text-emerald-800">Tailwind is awesome</p>

      {
        //background
      }
      <p className="bg-blue-300">TailWind BG</p>
      <p className="bg-zinc-500">TailWind BG</p>
      <p className="bg-slate-300">TailWind BG</p>
      <p className="bg-emerald-300">TailWind BG</p>
    </>
  );
}

/*
  return (
    <div className="text-blue">
      <h1>this is Home Page</h1>
      <Link href={"/about"}>
        <Button>goto about</Button>
      </Link>
    </div>
  );
  */
