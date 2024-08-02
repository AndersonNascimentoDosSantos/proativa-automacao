import { BaseContainerType } from "@/types.d";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Notification } from "./Common/Notifications";
import { Rocket } from "lucide-react";

const HeroContent = ({ children }: BaseContainerType) => {
  return (
    <>
      <div className="flex flex-col  gap-4">
        <p className="text-observatory-500"> Bem vindo à DoctorCare</p>
        <h1 className="text-6xl ">
          Assistência médica simplificada para todos
        </h1>
        <p className="text-lg">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>
        <Link
          href="#"
          className=" flex gap-2 items-center rounded-3xl text-lg bg-observatory-500 w-[fit-content] p-4 text-observatory-50"
        >
          <FaWhatsapp />
          <span>Agende sua Consulta</span>
        </Link>
      </div>
      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content text="puta que pariu" />
        {/* <Notification.Actions
    // onCancelAction={() => {
    //   console.log("cancelado");
    // }}
    // onSubmitAction={() => {
    //   console.log("enviado");
    // }}
    /> */}
      </Notification.Root>
    </>
  );
};

export default HeroContent;
