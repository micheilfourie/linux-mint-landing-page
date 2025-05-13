import PageHeader from "../components/PageHeader"
import ScrollTopButton from "../components/ScrollTopButton"
import FixedNav from "../components/FixedNav"
import Footer from "../components/Footer"
import DownloadOptions from "../components/DownloadOptions"

const Download = ({isThresholdAchieved, handleScrollToTop}: {isThresholdAchieved: boolean, handleScrollToTop: () => void}) => {
  return (
    <>
      <FixedNav isThresholdAchieved={isThresholdAchieved} />
      <ScrollTopButton isThresholdAchieved={isThresholdAchieved} handleScrollToTop={handleScrollToTop} />

      <PageHeader>Linux Mint 22.1 'Xia'</PageHeader>
      <DownloadOptions />
      <Footer bannerGroup={0}/>
    </>
  )
}

export default Download