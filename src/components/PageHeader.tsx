import Header from "./Header";
import Pattern from "../assets/pattern.png";

const PageHeader = ({ children }: { children: React.ReactNode}) => {
  return (
    <section className="from-secondary-accent to-tertiary-accent relative pb-4 bg-gradient-to-br">
      <img
        src={Pattern}
        alt=""
        className="pointer-events-none absolute top-0 h-full w-full object-cover"
      />

      <Header />

      <div className="mx-auto max-w-[1200px] px-10 pt-4">
        <h1 className="font-poppins lg:text-[56px] text-4xl font-[600] text-altwhite">{children}</h1>
      </div>
    </section>
  );
};

export default PageHeader;
