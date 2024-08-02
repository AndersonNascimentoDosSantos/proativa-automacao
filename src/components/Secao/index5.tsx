import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ColumnsLayout } from "../ColumnsLayout";

const Secaos = ({
  sectionImage,
  cta,
  inverted,
}: {
  sectionImage: StaticImageData;
  inverted?: boolean;
  cta?: boolean;
}) => {
  return (
    <ColumnsLayout className="bg-observatory-10 px-32 pt-16">
      <div
        className={clsx(
          ` ${inverted ? "order-2 " : "order-1 "}
         flex flex-col  gap-4`
        )}
      >
        <p className="text-observatory-500"> Bem vindo à DoctorCare</p>
        <h1 className="text-4xl ">
          Assistência médica simplificada para todos
        </h1>
        <p className="text-[14px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </p>
        {cta ? (
          <Link
            href="#"
            className=" flex gap-2 items-center rounded-3xl text-lg bg-observatory-500 w-[fit-content] p-4 text-observatory-50"
          >
            <FaWhatsapp />
            <span>Agende sua Consulta</span>
          </Link>
        ) : null}
      </div>
      <article className={clsx(inverted ? "order-1" : "order-2")}>
        <Image src={sectionImage} alt="" />
      </article>
    </ColumnsLayout>
  );
};

export default Secaos;
