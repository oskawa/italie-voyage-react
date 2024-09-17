import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./components/home/hero";
import { Presentation } from "./components/home/presentation";
import { Latest } from "./components/home/direct_access";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Latest />
    </>
  );
}
