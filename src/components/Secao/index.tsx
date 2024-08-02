import { cn } from "@/lib/utils";
import { HeroProps } from "@/types.d";
import { Hero } from "../Common/Hero";

interface SectionProps extends HeroProps {
  inverted?: boolean;
}

const Secao = ({
  image,
  inverted,
  actionText,
  contentText,
  upTitle,

  title,
}: SectionProps) => {
  return (
    <Hero.Root className="bg-observatory-10!">
      <Hero.Content.Root className={cn(`${inverted ? "order-2" : "order-1"}`)}>
        {upTitle ? <Hero.Content.UpTitle text={upTitle} /> : null}
        <Hero.Content.Title
          text={title}
          className="text-4xl text-observatory-700 "
        />

        {contentText ? (
          <Hero.Content.SubTitle
            className="text-[14px] text-observatory-950"
            text={contentText}
          />
        ) : null}

        {actionText ? (
          <Hero.Content.Actions.Root href={"#"}>
            {/* <Hero.Content.Actions.Icon Icon={FaWhatsapp} /> */}
            <Hero.Content.Actions.Content text={actionText} />
          </Hero.Content.Actions.Root>
        ) : // <Hero.Content.Actions Icon={FaWhatsapp} text={actionText} />
        null}
      </Hero.Content.Root>
      <Hero.Image
        className={cn(inverted ? "order-1 " : "order-2")}
        heroImage={image}
      />
    </Hero.Root>
  );
};

export default Secao;
