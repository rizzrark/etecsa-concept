const Hero = () => {
  return (
    <div className="flex flex-col w-full my-16 text-gray-700 lg:flex-row">
      <div className="flex flex-col w-full lg:w-[50%] order-2 lg:order-1">
        <div className="self-center">
          <div className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span>Más conectados y cercanos.</span>
            <span className="text-brand-500"> En línea con el mundo. </span>
            <div className="mt-6 text-xl xl:font-medium sm:mt-8 lg:text-justify sm:text-2xl">
              Incrementando la calidad de vida de la sociedad cubana a través de
              servicios de telecomunicaciones e infraestructura. Pioneros en el
              desarrollo de los procesos de informatización.
            </div>
          </div>
          <div className="mt-8 mb-4 ">
            <a
              href="http://www.etecsa.cu/  "
              className="flex-none uppercase tracking-wider px-5 py-3  shadow-lg text-lg w-fulll font-bold  text-white transition-colors duration-200 bg-[#3553B7] border border-transparent sm:w-auto hover:bg-gray-700 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none"
            >
              Comienza
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:w-[50%] order-1 lg:order-2">
        <img src="/webp/hero.webp" className="self-center" />
      </div>
    </div>
  );
};

export default Hero;
