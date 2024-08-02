// export const Depoiment = () => {
//   return (
//     <div>
//       <span>
//         <QuoteIcon
//           size={60}
//           className="fill-observatory-600 text-observatory-600 rotate-180"
//         />
//       </span>
//       <p>
//         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//         sint. Velit officia consequat duis enim. Amet minim mollit non deserunt
//         ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
//         enim.
//       </p>
//       <article>
//         <Image alt=" " src={depoiment1} />
//         <p>name</p>
//         <p>ocupação</p>
//       </article>
//     </div>
//   );
// };

import { cn } from "@/lib/utils";
import { HeroProps } from "@/types.d";
import { BaseContainer } from "../Common/Container";
import { Hero } from "../Common/Hero";

interface SectionProps extends HeroProps {
  inverted?: boolean;
}

export const Depoiment = ({
  image,
  inverted,
  actionText,
  contentText,
  upTitle,

  title,
}: SectionProps) => {
  return (
    <BaseContainer>
      <Hero.Root className="!mt-0 pt-4 bg-observatory-50">
        <Hero.Content.Root
          className={cn(`${inverted ? "order-2" : "order-1"}`)}
        >
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
          className={cn(
            inverted ? "order-1" : "order-2"
            // "h-44 w-44"
          )}
          heroImage={image}
        />
      </Hero.Root>
    </BaseContainer>
  );
};

// export default Depoiment;
