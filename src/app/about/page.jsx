"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>this is About Page</h1>

      <Button onClick={() => router.push("/")}>back</Button>
    </div>
  );
}
