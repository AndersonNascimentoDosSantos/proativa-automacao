import { StaticImageData } from "next/image";
import BenefitCard from "./Card";

import image08 from "../../../public/images/modulos/08.png";
import image1 from "../../../public/images/modulos/1.png";
import image11 from "../../../public/images/modulos/11.png";
import image12 from "../../../public/images/modulos/12.png";
import image13 from "../../../public/images/modulos/13.png";
import image14 from "../../../public/images/modulos/14.png";
import image15 from "../../../public/images/modulos/15.png";
import image16 from "../../../public/images/modulos/16.png";
import image2 from "../../../public/images/modulos/2.png";
import image3 from "../../../public/images/modulos/3.png";
import image4 from "../../../public/images/modulos/4.png";
import image5 from "../../../public/images/modulos/5.png";
import image6 from "../../../public/images/modulos/6.png";
import image7 from "../../../public/images/modulos/7.png";
import image8 from "../../../public/images/modulos/8.png";
import image9 from "../../../public/images/modulos/9.png";

const benefitsCards: Array<{
  id: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}> = [
  {
    id: 1,
    title: "Módulo 1: Introdução e boas vindas",
    description:
      "Descubra a metodologia do curso, conheça o instrutor e muito mais.",
    imageSrc: image1,
  },
  {
    id: 2,
    title: "Módulo 2: Mindset do Youtuber",
    description:
      "Saiba qual o pensamento de um youtuber de sucesso e como alcança-lo!.",

    imageSrc: image2,
  },
  {
    id: 3,
    title: "Módulo 3: Visão geral e conhecendo a plataforma",
    description:
      "Entenda o que é e como funciona o Youtube e seu algoritmo, e saiba o que faz um canal ter sucesso.",
    imageSrc: image3,
  },
  {
    id: 4,
    title: "Módulo 4: Definindo seu nicho no Youtube",
    description:
      "Confira as melhores dicas para encontrar o melhor nicho de atuação para o seu canal.",
    imageSrc: image4,
  },
  {
    id: 5,
    title: "Módulo 5: Criando seu canal na prática",
    description:
      "Vamos juntos criar seu canal do zero e configura-lo da melhor forma possível.",
    imageSrc: image5,
  },
  {
    id: 6,
    title: "Módulo 6: Como ganhar dinheiro no Youtube",
    description:
      "Entenda como funciona o adsense e descubra outras formas de monetizar seu canal.",
    imageSrc: image6,
  },
  {
    id: 7,
    title: "Módulo 7: Planejando seus conteúdos",
    description:
      "Desbloqueie seu cérebro e tenha ideias fantásticas para seu conteúdo.",
    imageSrc: image7,
  },
  {
    id: 12,
    title: "Módulo 8: Dicas de performance",
    description:
      "Neste módulo irei passar dicas incríveis de performance para você aplicar imediatamente na sua vida e consequentemente refletir no sucesso do canal.",
    imageSrc: image08,
  },

  {
    id: 8,
    title: "Módulo 9: Produzindo e publicando seus vídeos",
    description:
      "Veja dicas de equipamentos, como editar seus vídeos com o melhor custo x benefício. Fácil pra você!",

    imageSrc: image8,
  },
  {
    id: 9,
    title: "Módulo 10: Conhecendo e dominando o Analytics",
    description:
      "Veja quais métricas realmente importam para o seu canal e entenda o painel de controle.",
    imageSrc: image9,
  },

  {
    id: 11,
    title: "Módulo 11: Material Premium Para Download",
    description:
      "Pack de elementos,modelos de thumbs,pack de efeitos sonoros, pack de memes,pack de transições tudo sem Copyright",
    imageSrc: image11,
  },
  {
    id: 10,
    title: "Módulo 12: Dicas complementares",
    description:
      "Neste módulo irei passar dicas incríveis de como explodir suas views,quais a melhores palavras para seus titulos, como criar thumbnails incriveis e muito mais!",
    imageSrc: image12,
  },
  {
    id: 13,
    title: "Módulo 13: Copyright",
    description:
      "Neste módulo você vai aprender como funciona os direitos autorais no youtube,mitos sobre copyright , como evitar strikes e avisos de copyright e o que fazer ao receber um strike",
    imageSrc: image13,
  },
  {
    id: 14,
    title: "Módulo 14: Mentoria com o peter",
    description:
      "Neste modulo você vai ter acesso a dicas diretamente do peter em video.",
    imageSrc: image14,
  },
  {
    id: 15,
    title: "Módulo 15: Edição de video",
    description:
      "Aprenda usar o adobe premier um dos melhores softwares de edição do mercado, entenda como funciona o workflow de edição, aprenda a organizar seus projetos e muito mais.",
    imageSrc: image15,
  },
  {
    id: 16,
    title: "Módulo 16: Youtube com celular",
    description:
      "Neste modulo você vai aprender que nao precisa ter computador para iniciar seu canal, aprenda a fazer tudo que você faria com um computador direto do seu smartphone.",
    imageSrc: image16,
  },
];

const Benefits = () => {
  return (
    <div className="p-4 sm:pt-8 lg:pt-44 lg:pb-8 flex flex-col justify-center items-center gap-6 bg-observatory-50 w-full">
      <div className="text-observatory-700 text-2xl">Conteúdo</div>
      <h2 className="px-[10%] text-3xl">
        O que vou receber ao adquirir nosso curso?
      </h2>
      <div className="px-[10%] w-full">
        <div
          className="flex flex-col lg:grid
        lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 w-full"
        >
          {benefitsCards.map((card) => (
            <BenefitCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
