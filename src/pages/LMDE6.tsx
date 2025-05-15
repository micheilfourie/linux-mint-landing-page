import PageHeader from "../components/PageHeader";
import FixedNav from "../components/FixedNav";
import ScrollTopButton from "../components/ScrollTopButton";
import Footer from "../components/Footer";
import DownloadOptions from "../components/DownloadOptions";

const LMDE6 = ({
  isThresholdAchieved,
  handleScrollToTop,
}: {
  isThresholdAchieved: boolean;
  handleScrollToTop: () => void;
}) => {
  return (
    <>
      <FixedNav isThresholdAchieved={isThresholdAchieved} />
      <ScrollTopButton
        isThresholdAchieved={isThresholdAchieved}
        handleScrollToTop={handleScrollToTop}
      />
      <PageHeader>LMDE 6 'Faye'</PageHeader>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-10 py-6">
        <div className="flex w-full flex-col items-center justify-center gap-2 border-2 border-dotted border-gray-200 p-10">
          <h2 className="font-poppins text-altblack text-[26px] font-[500]">
            What is LMDE?
          </h2>
          <p className="font-ubuntu text-altblack text-center text-[15px] font-light">
            LMDE is a Linux Mint project which stands for "Linux Mint Debian
            Edition".
          </p>
          <p className="font-ubuntu text-altblack mb-4 text-center text-[15px] font-light">
            Its goal is to ensure Linux Mint can continue to deliver the same
            user experience if Ubuntu was ever to disappear. It allows us to
            assess how much we depend on Ubuntu and how much work would be
            involved in such an event. LMDE is also one of our development
            targets, as such it guarantees the software we develop is compatible
            outside of Ubuntu.
          </p>
        </div>
      </section>

      <DownloadOptions generateIndex={3}/>

      <Footer showBanner={true}/>
    </>
  );
};

export default LMDE6;
