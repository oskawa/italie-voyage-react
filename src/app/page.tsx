import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./components/home/hero";
import { Presentation } from "./components/home/presentation";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation/>
    </>
  );
}
