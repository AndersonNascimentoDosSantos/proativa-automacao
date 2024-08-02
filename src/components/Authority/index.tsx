const Authority = () => {
  return (
    <div
      className="mt-4 flex w-full h-[fit-content] 
     bg-observatory-10  md:absolute  lg:bottom-[-15%] md:w-[80%] md:ml-[50%] md:mr-[50%] md:-translate-x-1/2 sm:p-4   rounded-sm   shadow-sm shadow-observatory-300 "
    >
      <div className="flex flex-col flex-1 sm:flex-row divide-y md:divide-y-0 md:divide-x divide-observatory-300 justify-between md:items-start">
        <div className="flex flex-col   gap-4 justify-center items-center p-2 flex-1 w-full">
          <span className="text-base md:text-4xl text-observatory-700">
            +5.000
          </span>
          <p className="text-sm md:text-base capitalize text-nowrap">Alunos</p>
        </div>
        <div className="flex flex-col  gap-4 justify-center items-center p-2 flex-1 w-full ">
          <span className="text-base md:text-4xl text-observatory-700">
            +90
          </span>
          <p className="text-sm md:text-base capitalize text-nowrap">
            Video Aulas
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-2 flex-1">
          <span className="text-base md:text-4xl text-observatory-700">
            +{(3 * 1024).toLocaleString("pt-br")}
          </span>
          <p className="text-sm md:text-base capitalize text-nowrap">
            MegaBytes em arquivos de Bonus para baixar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authority;
