import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import FixedNav from "../components/FixedNav";
import ScrollTopButton from "../components/ScrollTopButton";
import CinnamonThumb from "../assets/thumb_cinnamon.png";
import Captain from "../assets/captain.png";
import Foreign from "../assets/foreign.png";
import MintUpdate from "../assets/mintupdate.png";
import PowerSettings from "../assets/power-settings.png";
import PowerApplet from "../assets/power-applet.png";
import NightLight from "../assets/nightlight.png";
import Calendar from "../assets/calendar.png";
import Dialog from "../assets/dialog.png";
import Keyring from "../assets/keyring.png";
import Display from "../assets/display.png";
import Sound from "../assets/sound.png";
import Backgrounds from "../assets/backgrounds.png";

const NewFeatures = ({
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

      <PageHeader>New Features</PageHeader>

      <div className="bg-altgray w-full">
        <div className="text-altblack mx-auto max-w-[1200px] p-10">
          <h1 className="font-poppins text-primary-accent mb-6 text-3xl font-[500]">
            Linux Mint 22.1
          </h1>

          <p className="font-ubuntu mb-6 font-light">
            Linux Mint 22.1 is a long term support release which will be
            supported until 2029. It comes with updated software and brings
            refinements and many new features to make your desktop experience
            more comfortable.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px]">
              <img src={CinnamonThumb} alt="" />
            </div>

            <label htmlFor="" className="font-ubuntu text-[15px] font-[500]">
              Linux Mint 22.1 "Xia"
            </label>
          </div>
        </div>
      </div>

      <div className="text-altblack mx-auto max-w-[1200px] p-10">
        <h1 className="font-poppins mb-6 text-[28px] font-[500]">
          Modernization of APT dependencies
        </h1>

        <p className="font-ubuntu mb-6 font-light">
          One of the major projects in Linux Mint 22.1 was a thorough review and
          modernization of APT dependencies. The goal was to clean up outdated
          components, rationalize, and create a streamlined, future-proof set of
          package management tools and libraries.
          <br />
          <br />
          APT isn’t just a command-line utility; it’s a robust ecosystem of
          tools (like Synaptic, GDebi, and apturl) and libraries (such as
          aptdaemon and packagekit) that support Mint’s applications. Many of
          these tools, though functional, were built over a decade ago and are
          no longer maintained upstream. While Linux Mint, Ubuntu, and Debian
          have patched them over the years, their aging design and limited
          features created persistent issues and barriers to innovation.
          <br />
          <br />
          To address this, Linux Mint transitioned to{" "}
          <b className="font-[500]">Aptkit</b> and{" "}
          <b className="font-[500]">Captain</b>:
        </p>

        <ul className="font-ubuntu text-altblack list-disc pl-5 font-light">
          <li>
            <b className="font-[500]">Aptkit</b> replaces aptdaemon, providing a
            streamlined library for package management operations with updated
            functionality.
          </li>
          <li>
            <b className="font-[500]">Captain</b> unifies the features of GDebi
            and apturl into a single, easy-to-use utility.
          </li>
        </ul>

        <p className="mb-6">
          All the tools previously reliant on aptdaemon, synaptic or apturl now
          use these replacements.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="max-w-[550px] shadow-lg">
            <img src={Captain} alt="" />
          </div>

          <label
            htmlFor=""
            className="font-ubuntu text-altblack mt-4 text-[15px] font-[500]"
          >
            Captain replaces Gdebi/apturl with better translations and less bugs
          </label>
        </div>

        <p className="my-6 font-light">This transition has several benefits:</p>

        <ul className="font-ubuntu text-altblack list-disc pl-5 font-light">
          <li>
            <b className="font-[500]">Better translations:</b> Everything is now
            fully translated, eliminating longstanding localization issues.
          </li>
          <li>
            <b className="font-[500]">Improved quality:</b> By removing reliance
            on unmaintained components, Mint ensures fewer bugs and "paper
            cuts". Small bugs can be addressed, they're no longer considered as
            "upstream / wontfix".
          </li>
          <li>
            <b className="font-[500]">Simplified architecture:</b> Moving to
            Aptkit allowed the Software Sources to downgrade foreign packages
            graphically and no longer rely on a VTE. In the Update Manager, it
            empowered us to boost Wayland compatibility and modernize the
            multithreading and multiprocessing code, which were getting very
            old.
          </li>
          <li>
            <b className="font-[500]">Easier development:</b> Rather than
            constantly patching release after release (packagekit's inability to
            purge, aptdaemon's inability to remove essential orphans), we
            develop the features we need and rely on libraries that fully
            support what we need.
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="max-w-[550px] shadow-lg">
            <img src={Foreign} alt="" />
          </div>

          <label
            htmlFor=""
            className="font-ubuntu text-altblack mt-4 text-[15px] font-[500]"
          >
            Foreign packages can be downgraded graphically
          </label>
        </div>

        <p className="my-6">
          While these changes might be invisible to most users, they lay the
          groundwork for a smoother, more reliable experience and any new issues
          can now be addressed with ease. This modernization ensures that Linux
          Mint’s package management remains robust, user-friendly, and ready for
          the future.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="max-w-[550px] shadow-lg">
            <img src={MintUpdate} alt="" />
          </div>

          <label
            htmlFor=""
            className="font-ubuntu text-altblack mt-4 text-[15px] font-[500]"
          >
            Much improved package management, multithreading and multiprocessing
            in the Update Manager
          </label>
        </div>

        <p className="my-6">
          These changes represent a significant step toward a smoother and more
          future-proof experience with the many tools which rely on package
          management.
        </p>
      </div>

      <div className="bg-altgray w-full">
        <div className="text-altblack mx-auto max-w-[1200px] p-10">
          <h1 className="font-poppins mb-6 text-[28px] font-[500]">
            Power Modes
          </h1>

          <p className="font-ubuntu mb-6 font-light">
            Choosing a power mode allows you to balance between power saving and
            performance optimization.
          </p>

          <ul className="font-ubuntu list-disc pl-5 font-light">
            <li>
              <b className="font-[500]">Power-saver mode:</b> Limits performance
              to conserve energy.
            </li>
            <li>
              <b className="font-[500]">Balanced mode:</b> Adjusts performance
              based on your needs.
            </li>
          </ul>

          <p className="my-6">
            On supported systems, an additional Performance mode is available.
            This mode maximizes performance at the cost of increased power
            consumption.
            <br />
            <br />
            Power-saving modes reduce performance but can extend battery life,
            reduce heat generation, lower CPU frequency, and decrease fan noise.
            Note that the system may override user settings based on the
            selected mode to adjust display brightness or make temporary
            adjustments to further reduce power consumption or enhance
            performance.
            <br />
            <br />
            In Cinnamon, you can select the power mode by navigating to
            <b className="font-[500]"> Preferences → Power Management:</b>
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={PowerSettings} alt="" />
            </div>

            <label
              htmlFor=""
              className="font-ubuntu mt-4 text-[15px] font-[500]"
            >
              Power mode selection in the Cinnamon settings
            </label>
          </div>

          <p className="my-6">
            Alternatively, you can select a power mode directly from the power
            applet:
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={PowerApplet} alt="" />
            </div>

            <label
              htmlFor=""
              className="font-ubuntu mt-4 text-[15px] font-[500]"
            >
              Power mode selection in the power applet
            </label>
          </div>

          <p className="my-6">
            In Xfce and MATE, power modes can be managed from the terminal.
            <br />
            <br />
            To view the available power modes, run the following command:{" "}
            <code className="mr-1 ml-4 rounded bg-gray-200 px-1">
              powerprofilesctl
            </code>
            .
            <br />
            <br />
            To switch between modes, use the following commands:
          </p>

          <ul className="font-ubuntu list-disc pl-5 font-light">
            <li>
              <code className="mr-1 ml-4 rounded bg-gray-200 px-1">
                powerprofilesctl set power-saver
              </code>
              to enable power-saver mode.
            </li>
            <li>
              <code className="mr-1 ml-4 rounded bg-gray-200 px-1">
                powerprofilesctl set balanced
              </code>
              to enable balanced mode.
            </li>
            <li>
              <code className="mr-1 ml-4 rounded bg-gray-200 px-1">
                powerprofilesctl set performance
              </code>
              to enable performance mode.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-altblack w-full">
        <div className="text-altwhite mx-auto max-w-[1200px] p-10">
          <h1 className="font-poppins text-primary-accent mb-6 text-[28px] font-[500]">
            Night Light
          </h1>

          <p className="font-ubuntu mb-6 font-light">
            Night Light is a feature designed to reduce your exposure to blue
            light by warming up the color of your monitor. As you approach
            bedtime, it adjusts the screen to help reduce eyestrain, headaches,
            and improve sleep quality.
            <br />
            <br />
            This feature is fully integrated into the Cinnamon desktop
            environment and it supports both Xorg and Wayland.
            <br />
            <br />
            To enable Night Light, navigate to{" "}
            <b className="font-[500]">Settings → Night Light</b> and toggle the
            option to activate it.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={NightLight} alt="" />
            </div>

            <label
              htmlFor=""
              className="font-ubuntu mt-4 text-[15px] font-[500]"
            >
              Night Light in Cinnamon
            </label>
          </div>

          <p className="font-ubuntu my-6 font-light">
            By default, Cinnamon automatically calculates your local sunrise and
            sunset times based on your system's timezone. During the day, the
            screen displays cooler, bluer tones, while at night, Night Light
            shifts the screen to warmer, redder tones.
            <br />
            <br />
            If you prefer, you can switch to a manual schedule and set custom
            start and end times for when the feature is active.
            <br />
            <br />
            You can also adjust the color temperature to control how warm or
            neutral you want the display to be during the night.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="bg-altgray w-full">
        <div className="text-altblack mx-auto max-w-[1200px] p-10">
          <h1 className="font-poppins mb-6 text-[28px] font-[500]">
            Cinnamon 6.4
          </h1>

          <p className="font-ubuntu mb-8 font-light">
            Linux Mint 22.1 ships with the latest version of Cinnamon, which
            introduces a brand new default theme, native dialogs, new features
            and much improved Wayland compatibility.
            <br />
            <br />
            <b className="text-lg font-[500]">New default theme</b>
            <br />
            <br />
            The default theme was redesigned with a modern aesthetic,
            characterized by smoother, rounded elements and darker tones that
            provide more contrast and depth. These changes are aimed at making
            the Cinnamon desktop visually appealing in all Linux distributions.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Calendar} alt="" />
            </div>
          </div>

          <p className="font-ubuntu my-8 font-light">
            The rounder corners and refined contrasts allow the interface to
            feel less cluttered, offering a more relaxing and enjoyable user
            experience. The design adjustments align with trends in contemporary
            UI/UX design, offering a more polished and efficient interface while
            ensuring that Cinnamon retains its classic, approachable aesthetic.
            <br />
            <br />
            <b className="text-lg font-[500]">Cleaner, modern dialogs</b>
            <br />
            <br />
            The confirmation dialogs now feature a cleaner layout and clearly
            separated buttons.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Dialog} alt="" />
            </div>
          </div>

          <p className="font-ubuntu my-8 font-light">
            The dialogs to end the session, kill a non-responsive application,
            authenticate with policykit, join a network, switch audio device,
            change the display settings, unlock a keyring were previously
            implemented in Gtk and some of them relied on system components
            which are not compatible with Wayland.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Keyring} alt="" />
            </div>
          </div>

          <p className="font-ubuntu my-8 font-light">
            To improve compatibility and make the user experience more
            consistent, Cinnamon switched them to native dialogs, implemented in
            Clutter, just like the panel and the other desktop components.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Display} alt="" />
            </div>
          </div>

          <p className="font-ubuntu my-8 font-light">
            On-Screen display elements were also redesigned to look cleaner and
            more modern than before.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Sound} alt="" />
            </div>
          </div>

          <p className="font-ubuntu my-8 font-light">
            <b className="text-lg font-[500]">Improved Wayland compatibility</b>
            <br />
            <br />
            In Cinnamon 6.4, we've replaced the deprecated `policykit-1-gnome`,
            which had issues under Wayland, with native dialogs for better
            integration. As a result, all applications and features that require
            admin privileges are now fully functional in Cinnamon on Wayland.
            <br />
            <br />
            This includes crucial features like:
          </p>

          <ul className="font-ubuntu list-disc pl-5 font-light">
            <li className="font-ubuntu font-light">System snapshots</li>
            <li className="font-ubuntu font-light">
              Installing or updating software packages
            </li>
            <li className="font-ubuntu font-light">System settings</li>
          </ul>

          <p className="font-ubuntu my-8 font-light">
            Additionally, the Night Light feature and the color plugin have both
            been updated to fully support Wayland.
          </p>

          <p className="font-ubuntu my-8 font-light">
            <b className="text-lg font-[500]">Other Cinnamon improvements</b>
            <br />
            <br />
            New options include:
          </p>

          <ul className="font-ubuntu list-disc pl-5 font-light">
            <li className="font-ubuntu font-light">
              Notifications can now appear above fullscreen windows (new
              setting).
            </li>
            <li className="font-ubuntu font-light">
              Nemo now has an option to disable auto-expanding of treeview
              columns during drag and drop.
            </li>
            <li className="font-ubuntu font-light">
              GWL (Global Window List) now includes an option to always show
              windows from other monitors.
            </li>
          </ul>

          <p className="font-ubuntu my-8 font-light">
            Other notable improvements include:
          </p>

          <ul className="font-ubuntu list-disc pl-5 font-light">
            <li className="font-ubuntu font-light">
              Simplified sound over-amplification settings for easier
              configuration.
            </li>
            <li className="font-ubuntu font-light">
              Cleaner Alt-Tab behavior with no more arrows, cryptic title
              changes, and minimized windows now placed at the end by default.
            </li>
            <li className="font-ubuntu font-light">
              Option to toggle password visibility in the screensaver dialog.
            </li>
            <li className="font-ubuntu font-light">
              Nemo actions now support keyboard shortcuts for more efficient
              navigation.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-altblack mx-auto max-w-[1200px] p-10">
        <h1 className="font-poppins mb-6 text-[28px] font-[500]">
          Other improvements
        </h1>

        <p className="font-ubuntu text-[15px] font-light">
          The Software Manager has been optimized for better speed, ensuring
          faster application browsing and installations.
          <br />
          <br />
          The Bulky file manager now includes a useful feature for removing
          accents from file names, which is especially handy for international
          users managing large batches of files.
          <br />
          <br />
          Thumbnails are now generated for .ora (OpenRaster) files, making it
          easier to browse graphic design projects and workflows.
        </p>
      </div>

      <div className="bg-altgray w-full">
        <div className="text-altblack mx-auto max-w-[1200px] p-10">
          <h1 className="font-poppins mb-6 text-[28px] font-[500]">
            Artwork improvements
          </h1>

          <p className="font-ubuntu mb-8 font-light">
            In the Mint-Y theme, Cinnamon looks darker, rounder and more modern
            than before.
            <br />
            <br />
            Since "Maya" in 2012, every Linux Mint release has come with a fresh
            batch of desktop wallpapers. People love them, and new sets are
            always a highlight, but with over 20 collections now, finding the
            right one has gotten tricky.
          </p>

          <div className="flex flex-col items-center mb-6 justify-center">
            <div className="max-w-[550px] shadow-lg">
              <img src={Backgrounds} alt="" />
            </div>
            <label
              htmlFor=""
              className="font-ubuntu mt-4 text-[15px] font-[500]"
            >
              "Wallpapers" features the best colorful desktop backgrounds
            </label>
          </div>

          <p className="font-ubuntu mb-8 font-light">
            Starting with Linux Mint 22.1, wallpapers are moving to themed sets,
            making them easier to explore and more organized.
            <br />
            <br />
            The first set is "Wallpapers," full of bold, colorful designs
            featuring cool abstract patterns and 3D shapes to give your desktop
            a vibrant new look!
          </p>

          <h1 className="font-poppins mb-6 text-[28px] font-[500]">
            Main components
          </h1>

          <p className="font-ubuntu mb-8 font-light">
            Linux Mint 22.1 features a Linux kernel 6.8 and an Ubuntu Noble
            package base.
          </p>

          <h1 className="font-poppins mb-6 text-[28px] font-[500]">
            LTS strategy
          </h1>

          <p className="font-ubuntu mb-8 font-light">
            Linux Mint 22.1 will receive security updates until 2029.
            <br />
            <br />
            Until 2026, future versions of Linux Mint will use the same package
            base as Linux Mint 22.1, making it trivial for people to upgrade.
            <br />
            <br />
            Until 2026, the development team won't start working on a new base
            and will be fully focused on this one.
          </p>
        </div>
      </div>

      <Footer bannerGroup={1} />
    </>
  );
};

export default NewFeatures;
