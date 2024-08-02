import Image, { StaticImageData } from "next/image";

const BenefitCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
}) => {
  return (
    <div className="flex flex-col justify-start bg-observatory-10  rounded-lg gap-4 p-8 shadow-lg h-[fit-content]">
      <div className="max-h-[220px] aspect-square w-[fit-content] self-center">
        <Image src={imageSrc} alt="" className="h-full aspect-square " />
      </div>
      <h3 className="text-2xl text-observatory-800 self-start">{title}</h3>
      <p className="text-base self-start">{description}</p>
    </div>
  );
};

export default BenefitCard;
