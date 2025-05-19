import FixedNav from "../components/FixedNav";
import ScrollTopButton from "../components/ScrollTopButton";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const AllVersions = () => {
  return (
    <>
      <FixedNav />
      <ScrollTopButton />
      <PageHeader>All Versions</PageHeader>

      <section className="mx-auto mt-4 flex max-w-[1200px] flex-col gap-10 lg:px-10 px-6 py-6">
        <div className="text-center">
          <h3 className="font-playfair text-altblack text-[24px] italic">
            Currently supported
          </h3>
          <h2 className="font-poppins text-altblack my-2 text-[36px] font-[600]">
            Linux Mint Releases
          </h2>
          <p className="font-ubuntu text-altblack text-[15px] font-light">
            The table below shows all the Linux Mint releases which are
            currently supported.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="bg-altgray mb-10 w-full border-collapse border border-gray-300">
            <thead className="from-secondary-accent to-tertiary-accent bg-gradient-to-r">
              <tr className="divide-x divide-gray-300">
                <th className="font-poppins text-altwhite p-4 py-4 font-[500] text-nowrap uppercase">
                  Version
                </th>
                <th className="font-poppins text-altwhite p-4 py-4 font-[500] text-nowrap uppercase">
                  Codename
                </th>
                <th className="font-poppins text-altwhite p-4 py-4 font-[500] text-nowrap uppercase">
                  Edition
                </th>
                <th className="font-poppins text-altwhite p-4 py-4 font-[500] text-nowrap uppercase">
                  Package base
                </th>
                <th className="font-poppins text-altwhite p-4 py-4 font-[500] text-nowrap uppercase">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 Start */}

              <tr>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  22.1
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Xia
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Noble
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2029.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 2 Start */}

              <tr>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  22
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Wilma
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Noble
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2029.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 3 Start */}

              <tr>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  21.3
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Virginia
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Jammy
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2027.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon (Edge ISO)
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 4 Start */}

              <tr>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  21.2
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Victoria
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Jammy
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2027.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon (Edge ISO)
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 5 Start */}

              <tr>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  21.1
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Vera
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Jammy
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2027.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 6 Start */}

              <tr>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  21
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Vanessa
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Jammy
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2027.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 7 Start */}

              <tr>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  20.3
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Una
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Focal
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2025.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon (Edge ISO)
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 8 Start */}

              <tr>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  20.2
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Uma
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Focal
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2025.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon (Edge ISO)
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 9 Start */}

              <tr>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  20.1
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ulyssa
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Focal
                </td>
                <td
                  rowSpan={4}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2025.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon (Edge ISO)
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 10 Start */}

              <tr>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  20
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ulyana
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Ubuntu Focal
                </td>
                <td
                  rowSpan={3}
                  className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light"
                >
                  Long term support release (LTS), supported until April 2025.
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  MATE
                </td>
              </tr>

              <tr>
                <td className="font-ubuntu text-primary-accent p-4 py-4 text-[15px] font-light">
                  Xfce
                </td>
              </tr>

              {/* Row 11 Start */}

              <tr>
                <td className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light">
                  6
                </td>
                <td className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Faye
                </td>
                <td className="font-ubuntu text-primary-accent border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Cinnamon
                </td>
                <td className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Debian Bookworm
                </td>
                <td className="font-ubuntu border border-gray-300 p-4 py-4 text-[15px] font-light">
                  Long term support release (LTS).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer showBanner={true} />
    </>
  );
};

export default AllVersions;
