import PageHeader from "../components/PageHeader";
import FixedNav from "../components/FixedNav";
import ScrollTopButton from "../components/ScrollTopButton";
import Footer from "../components/Footer";
import CinnamonThumb from "../assets/thumb_cinnamon.png";
import Vbox1 from "../assets/vbox1.png";
import Vbox2 from "../assets/vbox2.png";
import GrubVideo from "../assets/nomodeset_grub.webm";

const ReleaseNotes = ({
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
      <PageHeader>Release Notes</PageHeader>

      <div className="text-altblack mx-auto max-w-[1200px] p-10">
        <p className="font-ubuntu mb-6 font-light">
          This is Linux Mint 22.1, codename Xia.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Long term support release (LTS), supported until April 2029.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Linux Mint 22.1 comes with updated software and brings refinements and
          many new features to make your desktop experience more comfortable.
        </p>

        <figure className="flex flex-col items-center justify-center">
          <div className="max-w-[550px]">
            <img loading="lazy" src={CinnamonThumb} alt="Cinnamon Thumbnail" />
          </div>

          <figcaption className="font-ubuntu text-[15px] font-[500]">
            Linux Mint 22.1 "Xia"
          </figcaption>
        </figure>

        <h1 className="font-poppins text-primary-accent mb-6 text-3xl font-[500]">
          Known issues
        </h1>

        <h2 className="font-poppins text-altblack mb-6 text-3xl font-[500]">
          Shutdown timeout
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          For your convenience, the shutdown timeout is reduced to 10s.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          If you rely on lengthy operations to finish before shutdown, read
          /etc/systemd/system.conf.d/50_linuxmint.conf and override the timeout
          value in /etc/systemd/system.conf.d/60_custom.conf.
        </p>

        <h2 className="font-poppins text-altblack mb-6 text-3xl font-[500]">
          Virtualbox Display Settings
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          If you are testing Linux Mint in Virtualbox, make sure to apply the
          following settings.
        </p>

        <h6 className="font-poppins text-altblack text-lg font-[500]">
          Display Settings
        </h6>

        <p className="font-ubuntu mb-6 font-light">
          {`To prevent black screens change the VirtualBox graphics controller to "VMSVGA". Do this by opening up the settings for your VM and select Display -> Screen.`}
        </p>

        <figure className="flex flex-col items-center justify-center">
          <div className="max-w-[550px]">
            <img loading="lazy" src={Vbox1} alt="Vbox1 Thumbnail" />
          </div>

          <figcaption className="font-ubuntu text-[15px] font-[500]">
            Use VMSVGA with no 3D acceleration
          </figcaption>
        </figure>

        <p className="font-ubuntu my-6 font-light">
          Increase the video memory to 128MB.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Disable 3D acceleration. It leads to rendering issues with
          applications which use Webkit or GTK4.
        </p>

        <figure className="flex flex-col items-center justify-center">
          <div className="max-w-[550px]">
            <img loading="lazy" src={Vbox2} alt="Vbox2 Thumbnail" />
          </div>

          <figcaption className="font-ubuntu text-[15px] font-[500]">
            Enable Nested Paging
          </figcaption>
        </figure>

        <p className="font-ubuntu my-6 font-light">
          {`To avoid garbled screens during the live session, enable Nested Paging in System -> Acceleration.`}
        </p>

        <h6 className="font-poppins text-altblack text-lg font-[500]">
          Guest Additions
        </h6>

        <p className="font-ubuntu mb-6 font-light">
          o add support for shared folders, drag and drop, proper acceleration
          and display resolution in Virtualbox, click on the "Devices" menu of
          Virtualbox and choose "Insert Guest Additions CD Image". Choose
          "download" when asked and follow the instructions.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          For more info, read:
          <a
            href="https://docs.oracle.com/cd/E36500_01/E36502/html/qs-guest-additions.html"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            Installing the VirtualBox Guest Additions
          </a>
          .
        </p>

        <h2 className="font-poppins text-altblack mb-3 text-3xl font-[500]">
          Xorg crash in virtual machines
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Installing the multimedia codecs (mint-meta-codecs) results in the
          installation of gstreamer1.0-vaapi.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Playing multimedia content with gstreamer1.0-vaapi installed requires
          3D acceleration. If acceleration isn't available, Xorg crashes and the
          user session is terminated:
          <a
            href="https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609
          </a>
        </p>

        <p className="font-ubuntu mb-6 font-light">
          If available, enabling 3D acceleration, solves this issue. Note
          however that 3D acceleration can lead to issues with Webkit and GTK4
          (see the previous paragraph).
        </p>

        <p className="font-ubuntu mb-6 font-light">
          A simpler solution is to remove gstreamer1.0-vaapi:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>apt remove gstreamer1.0-vaapi</code>
        </div>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Thinner Ubuntu fonts
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          A more modern slimmer version of the Ubuntu font family is now shipped
          as standard.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Going back to the old fonts is possible by downloading the old fonts
          package and refusing updates for it. For more information read
          <a
            href="https://askubuntu.com/questions/1465216/install-the-old-version-of-the-ubuntu-font"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            https://askubuntu.com/questions/1465216/install-the-old-version-of-the-ubuntu-font
          </a>
          .
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Sound issues
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Linux Mint moved to a new sound server called Pipewire.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          To check which sound server is running, use the following command:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>inxi -A</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          If you're unable to get the sound working, you can try to go back to
          the older sound server called PulseAudio.
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>apt purge pipewire pipewire-bin</code>
          <code>systemctl enable --user pulseaudio</code>
          <code>sudo reboot</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          Upstream bug report for choppy sound over HDMI:
          <a
            href="https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1025453"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1025453
          </a>
          .
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Grub2 theme in HiDPI
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          If the grub2 theme looks too small in your HiDPI monitor, install the
          "grub2-theme-mint-2k" package.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Snap Store
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          The Snap Store is disabled. For more information on this or to
          re-enable it read
          <a
            href="https://linuxmint-user-guide.readthedocs.io/en/latest/snap.html"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            https://linuxmint-user-guide.readthedocs.io/en/latest/snap.html
          </a>
          .
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Home directory encryption
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Benchmarks have demonstrated that, in most cases, home directory
          encryption is slower than full disk encryption.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          The move to systemd caused a regression in ecrypts which is
          responsible for mounting/unmounting encrypted home directories when
          you login and logout. Because of this issue, please be aware that in
          Mint 20 and newer releases, your encrypted home directory is no longer
          unmounted on logout:
          <a
            href="https://bugs.launchpad.net/ubuntu/+source/gnome-session/+bug/1734541"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            https://bugs.launchpad.net/ubuntu/+source/gnome-session/+bug/1734541
          </a>
          .
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Guest sessions
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          You can enable guest sessions in the "Login Window" utility, but this
          option is now disabled by default.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Touchpad drivers
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          The default touchpad driver in this edition is "libinput" (provided by
          the xserver-xorg-input-libinput package).
        </p>

        <p className="font-ubuntu mb-6 font-light">
          If you experience problems with it, you can switch to another driver
          called "synaptics" (provided by the xserver-xorg-input-synaptics
          package).
        </p>

        <p className="font-ubuntu mb-6 font-light">
          To know which driver is used by your input devices, run the following
          command:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>grep -i "Using input driver" /var/log/Xorg.0.log</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          When both drivers are installed, "synaptics" takes priority.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          To switch to the "synaptics" driver, install it with the command:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>apt install xserver-xorg-input-synaptics</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          Then log out and log back in.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          To go back to using "libinput", simply remove the "synaptics" driver:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>apt remove xserver-xorg-input-synaptics</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          Then log out and log back in.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Note: You can also try installing the "evdev" driver (provided by the
          xserver-xorg-input-evdev).
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Wine
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          To install the complete version of WINE, open a terminal and type:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>apt install wine-installer</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          Among other things, this will install wine-desktop-files, which adds
          menu entries for regedit, your C:\ drive and other items which are
          missing from upstream WINE.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Mouse Pointer theme in root, Qt and Flatpak applications
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          To modify the pointer theme for root and Qt applications you need to
          set it system-wide using the update-alternatives command:
        </p>

        <div className="ml-4 flex w-full flex-col rounded bg-gray-200 px-2 py-1">
          <code>sudo update-alternatives --config x-cursor-theme</code>
        </div>

        <p className="font-ubuntu my-6 font-light">
          To get a Flatpak to use your pointer theme, install and run Flatseal.
          Select your Flatpak and give it permissions for 'xdg-data/icons:ro' in
          the section 'Other files'.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          DVD Playback with VLC
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          {`If VLC does not find your DVD player, click on Media->Open Disc, and specify '/dev/sr0' as the disc device.`}
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          NTFS volumes
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Kernel 6.8 introduced a regression with NTFS volumes:
        </p>

        <ul className="font-ubuntu list-disc pl-5 font-light">
          <li>
            <a
              href="https://bugs.launchpad.net/ubuntu/+source/ntfs-3g/+bug/2062972"
              className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
            >
              https://bugs.launchpad.net/ubuntu/+source/ntfs-3g/+bug/2062972
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tuxera/ntfs-3g/issues/108"
              className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
            >
              https://github.com/tuxera/ntfs-3g/issues/108
            </a>
          </li>
        </ul>

        <p className="font-ubuntu my-6 font-light">
          If you're unable to mount an NTFS volume and see 'volume is dirty and
          "force" flag is not set!' in the dmesg output, launch Disks from the
          application menu, select your NTFS device, click the cog menu and
          choose "Repair Filesystem...".
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          ZFS removed
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          ZFS support was removed from the installer.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          This feature wasn't used by many people and required a significant
          amount of work and maintenance to be properly tested and supported.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Other issues
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Linux Mint 22.x is based on Ubuntu 24.04. Make sure to read the
          <a
            href="https://discourse.ubuntu.com/t/ubuntu-24-04-lts-noble-numbat-release-notes/39890"
            className="text-primary-accent hover:text-tertiary-accent pl-1 transition-all duration-300 ease-in-out"
          >
            Ubuntu release notes
          </a>
          .
        </p>

        <h1 className="font-poppins text-primary-accent mb-6 text-3xl font-[500]">
          Tips
        </h1>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Username and password in the live session
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          In the live session, the username is "mint" and the password is empty
          (i.e. just press Enter if asked for a password).
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Moving windows which don't fit in the screen
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          If your screen resolution is too low, some windows might not fit in
          the screen.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          While pressing the ALT key, you can grab any part of a window with the
          mouse and move it across the screen.
        </p>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Solving freezes during the boot sequence
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Some graphics cards don't work well with the open-source driver
          present in Linux Mint.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          If Linux Mint freezes during boot time, use the "Compatibility Mode"
          boot option.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          In this mode you should be able to boot Linux Mint and install it on
          your computer.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          After the installation, reboot the computer and wait for the boot menu
          to appear.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Add the "nomodeset" option as illustrated below:
        </p>

        <video src={GrubVideo} controls className="h-auto w-full" />

        <p className="font-ubuntu my-6 font-light">
          If your graphics card is from NVIDIA, once in Linux Mint, perform the
          following steps to install the NVIDIA drivers:
        </p>

        <ul className="font-ubuntu list-disc pl-5 font-light">
          <li>Run the Driver Manager</li>
          <li>Choose the NVIDIA drivers and wait for them to be installed</li>
          <li>Reboot the computer</li>
        </ul>

        <p className="font-ubuntu my-6 font-light">
          With these drivers the system should now be stable and you no longer
          need to use "nomodeset".
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Note: If you're using an Optimus card, you've nothing more to do. Upon
          reboot, a system tray icon should show up indicating which GPU is
          currently active. Click on it to switch GPUs.
        </p>

        <p className="font-ubuntu mb-6 font-light">
          Note: If you still cannot boot try one of the following solutions:
        </p>

        <ul className="font-ubuntu list-disc pl-5 font-light">
          <li>{`Try with "nouveau.noaccel=1" instead of "nomodeset".`}</li>
          <li>{`Try with "noapic noacpi nosplash irqpoll" instead of "quiet splash".`}</li>
          <li>{`After the installation, use "Advanced Options" -> "Recovery mode" from the boot menu and choose "resume".
`}</li>
        </ul>

        <h2 className="font-poppins text-altblack mt-6 mb-3 text-3xl font-[500]">
          Choosing the right version of Linux Mint
        </h2>

        <p className="font-ubuntu mb-6 font-light">
          Each new version comes with a new kernel and a newer set of drivers.
          Most of the time, this means newer versions are compatible with a
          larger variety of hardware components, but sometimes it might also
          introduce regressions. If you are facing hardware issues with the
          latest version of Linux Mint and you are unable to solve them, you can
          always try an earlier release. If that one works better for you, you
          can stick to it, or you can use it to install Linux Mint and then
          upgrade to the newer release.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default ReleaseNotes;
