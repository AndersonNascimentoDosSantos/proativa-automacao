import Link from "next/link";
import { Hero } from "../Common/Hero";

const Header = () => {
  return (
    <div className="bg-observatory-700 text-white flex justify-between  lg:px-8 p-2  items-center fixed z-10 w-full top-0">
      <div className="md:hidden flex justify-center items-center w-full">
        <Hero.Content.Actions.Root
          href="https://pay.hotmart.com/C28679064F?checkoutMode=10&ref=G77098060C&bid=1718130797037"
          className="sm:whitespace-nowrap"
          // className="px-4 rounded-3xl bg-observatory-300 border border-white whitespace-nowrap"
        >
          <Hero.Content.Actions.Content
            text="Descubra os Segredos do Youtube!"
            className="font-bold"
          />
        </Hero.Content.Actions.Root>
      </div>
      {/* <div className="px-4 md:hidden">
        <Image src={logoImage} className="h-20 w-20" alt="logo home" />
      </div> */}

      <nav className="hidden w-full md:flex justify-between pt-1 px-8 items-center">
        {/* <div className="px-4">
          <Image src={logoImage} className="h-20 w-20" alt="logo home" />
        </div> */}
        <div className=" w-full flex gap-4 justify-center">
          <Link href={"#home"}>Home</Link>
          <Link href={"#About"}>Sobre</Link>
          <Link href={"#Servicos"}>Serviços</Link>
          <Link href={"#Depoimentos"}>Depoimentos</Link>
        </div>
        <Hero.Content.Actions.Root
          href="https://pay.hotmart.com/C28679064F?checkoutMode=10&ref=G77098060C&bid=1718130797037"
          className="sm:whitespace-nowrap"
          // className="px-4 rounded-3xl bg-observatory-300 border border-white whitespace-nowrap"
        >
          <Hero.Content.Actions.Content
            text="Descubra os Segredos do Youtube!"
            className="font-bold"
          />
        </Hero.Content.Actions.Root>
      </nav>
    </div>
  );
};

export default Header;
