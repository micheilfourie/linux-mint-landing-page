import { create } from "zustand";

type StoreType = {
  isScrollThresholdAchieved: boolean;
  isWidthThresholdAchieved: boolean;
  updateScroll: () => void;
  updateWidth: () => void;
  navOpen: boolean
};

const scrollThreshold = 300;
const widthThreshold = 1024;

const useStore = create<StoreType>((set, get) => ({
  isScrollThresholdAchieved: false,
  isWidthThresholdAchieved: false,
  navOpen: false,

  toggleNav: () => {
    const { navOpen } = get();
    set({ navOpen: !navOpen });
  },

  updateScroll: () => {
    const currentY = window.scrollY;
    const { isScrollThresholdAchieved } = get();

    if (!isScrollThresholdAchieved && currentY > scrollThreshold) {
      set({ isScrollThresholdAchieved: true });
    } else if (isScrollThresholdAchieved && currentY <= scrollThreshold) {
      set({ isScrollThresholdAchieved: false });
    }
  },

  updateWidth: () => {
    const currentWidth = window.innerWidth;
    const { isWidthThresholdAchieved } = get();

    if (!isWidthThresholdAchieved && currentWidth > widthThreshold) {
      set({ isWidthThresholdAchieved: true });
    } else if (isWidthThresholdAchieved && currentWidth <= widthThreshold) {
      set({ isWidthThresholdAchieved: false });
    }
  },
}));
export default useStore;
