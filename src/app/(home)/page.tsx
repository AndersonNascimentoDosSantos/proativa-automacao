import Benefits from "@/components/Benefits";
import { Depoiment } from "@/components/Depoiment";
// import HeroHome from "@/components/Common/Hero/index3";

import HeroHome from "@/components/HeroHome";
import heroImage2 from "../../../public/images/depoiments/Img2.png";
import Header from "@/components/Header";
export default function Home() {
  return (
    <>  
    <main className="flex flex-col min-h-dvh max-w-[1440px] items-center justify-between item-center mx-auto">
      <HeroHome />
      {/* <Benefits /> */}
      {/* <Depoiment
        {...{
          image: heroImage2,
          title: "Entre em contato com a gente!",
          contentText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim. Amet minim mollit non deserunt .`,
          inverted: true,
        }}
      /> */}

      {/* <Secao
        {...{
          inverted: true,
          image: heroImage,
          upTitle: "Sobre Nós",
          title: "Entenda quem somos e por que existimos",
          contentText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.`,
        }}
      />
      <Secao
        {...{
          image: heroImage2,
          actionText: "Agende sua Consulta",
          title: "Entre em contato com a gente!",
          contentText: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim. Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
        minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint.`,
        }}
      /> */}
    </main>
    </>
  );
}
