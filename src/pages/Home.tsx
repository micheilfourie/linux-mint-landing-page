import Hero from "../components/Hero";
import Features from "../components/Features";
import Banner from "../components/Banner";
import AboutProduct from "../components/AboutProduct";
import FAQ from "../components/FAQ";
import FromPress from "../components/FromPress";
import FromBlog from "../components/FromBlog";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FixedNav from "../components/FixedNav";
import ScrollTopButton from "../components/ScrollTopButton";

const Home = ({
  scrollPos,
  handleScrollToTop,
}: {
  scrollPos: number;
  handleScrollToTop: () => void;
}) => {
  return (
    <>
      <FixedNav scrollPos={scrollPos} />
      <ScrollTopButton
        scrollPos={scrollPos}
        handleScrollToTop={handleScrollToTop}
      />
      
      <Hero />
      <Features />

      <Banner pattern={1}>
        <h2 className="font-poppins text-[30px] font-[500]">
          Give it a try. You’ll Love it!
        </h2>
        <p className="font-ubuntu">
          Most of our users come from Windows and they never look back.
        </p>
      </Banner>

      <AboutProduct />
      <FAQ />
      <FromPress />
      <FromBlog />

      <Banner pattern={2}>
        <h2 className="font-poppins text-[30px] font-[500]">
          A fantastic community!
        </h2>
        <p className="font-ubuntu w-[60%] text-center">
          We receive more than 300 donations a month. Our users love what we do
          and they mean the World to us. Around the desktop operating system
          Linux Mint is also a fantastic community.
        </p>
      </Banner>

      <Partners />
      <Footer />
    </>
  );
};

export default Home;
