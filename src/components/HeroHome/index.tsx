import heroImage from "../../../public/images/background-hero.png";
import Authority from "../Authority";
import { BaseContainer } from "../Common/Container";
import { Hero } from "../Common/Hero";
const HeroHome = () => {
  return (
    <BaseContainer className="md:pb-14 2xl:pb-0 bg-observatory-100">
      <Hero.Root>
        <Hero.Content.Root
        // className={clsx(` ${inverted ? "order-2 " : "order-1 "}`)}
        >
          <Hero.Content.UpTitle
            text="Torne-se um Youtuber de Sucesso!"
            className="font-bold"
          />
          <Hero.Content.Title
            text=" Desvende os Segredos do YouTube"
            className="font-bold"
          />

          <Hero.Content.SubTitle
            // className="text-[14px]"
            text=" Aprenda técnicas comprovadas para para Criar, Popularizar, Monetizar e transformar seu canal em um negócio lucrativo."
          />

          {/* <Hero.Content.Actions Icon={FaWhatsapp} text="Agende sua Consulta" /> */}
          <div className=" italic flex  flex-col md:flex-row justify-between items-center gap-2">
            <Hero.Content.Actions.Root href="https://pay.hotmart.com/C28679064F?checkoutMode=10&ref=G77098060C&bid=1718130797037">
              {/* <Hero.Content.Actions.Icon Icon={FaWhatsapp} /> */}
              <Hero.Content.Actions.Content
                text="Descubra os Segredos do Youtube!"
                className="font-bold"
              />
            </Hero.Content.Actions.Root>
            <Hero.Content.Actions.Content
              text="e Junte-se a +5000 alunos"
              className="font-bold text-sm"
            />
          </div>
        </Hero.Content.Root>
        <Hero.Image heroImage={heroImage} />
      </Hero.Root>
      <Authority />
    </BaseContainer>
  );
};

export default HeroHome;
