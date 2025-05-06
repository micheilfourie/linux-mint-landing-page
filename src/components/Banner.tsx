const Banner = () => {
  return (
    <section className="bg-altblack text-altwhite relative mt-20 flex h-[300px] flex-col items-center justify-center">
      <img
        src="https://linuxmint.com/web/wizixo/template/assets/images/bg/pattern/02.png"
        alt=""
        className="pointer-events-none absolute top-0 h-full w-full object-cover"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-poppins text-[30px] font-[500]">
          Give it a try. You’ll Love it!
        </h2>
        <p className="font-ubuntu">
          Most of our users come from Windows and they never look back.
        </p>
      </div>
    </section>
  );
};

export default Banner;
