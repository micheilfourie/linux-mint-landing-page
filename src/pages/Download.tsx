import PageHeader from "../components/PageHeader"
import ScrollTopButton from "../components/ScrollTopButton"
import FixedNav from "../components/FixedNav"
import Footer from "../components/Footer"
import DownloadOptions from "../components/DownloadOptions"
import Button from "../components/Button"

const Download = ({isThresholdAchieved, handleScrollToTop}: {isThresholdAchieved: boolean, handleScrollToTop: () => void}) => {
  return (
    <>
      <FixedNav isThresholdAchieved={isThresholdAchieved} />
      <ScrollTopButton isThresholdAchieved={isThresholdAchieved} handleScrollToTop={handleScrollToTop} />

      <PageHeader>Linux Mint 22.1 'Xia'</PageHeader>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-10 py-6">
        <div className="flex w-full flex-col items-center justify-center gap-2 border-2 border-dotted border-gray-200 p-10">
          <h2 className="font-poppins text-altblack text-[26px] font-[500]">
            Ready to download?
          </h2>
          <p className="font-ubuntu text-altblack mb-4 text-center text-[15px] font-light">
            Linux Mint is available in different flavors. Choose an edition
            below.
            <br />
            For more information read the installation instructions.
          </p>
          <a href="https://linuxmint-installation-guide.readthedocs.io/en/latest/">
            <Button buttonType="primary">Installation Instructions</Button>
          </a>
        </div>
      </div>

      <DownloadOptions />
      <Footer showBanner={true} />
    </>
  )
}

export default Download