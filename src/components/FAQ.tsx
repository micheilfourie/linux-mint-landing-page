import Button from "./Button";

type faqType = {
  question: string;
  answer: string;
};

const faqList: faqType[] = [
  {
    question: "Is it free?",
    answer:
      "Yes, Linux Mint is completely free of charge. Almost everything in Linux Mint is also open-source.",
  },
  {
    question: "Will it work on my computer?",
    answer:
      "Yes, Linux Mint works on most computers. It can also be run from a live USB stick to make sure everything works fine without having to install anything.",
  },
  {
    question: "Can I keep Windows?",
    answer:
      "Yes, you can have both Windows and Linux Mint. A menu asks you which one to use when you start the computer.",
  },
  {
    question: "Will it suit my needs?",
    answer:
      "Hopefully. Linux Mint comes with what most people need out of the box as well as easy access to more than 60,000 software packages and 7,800 games.",
  },
];

const FAQ = () => {
  return (
    <section className="text-altwhite bg-altblack ">
      <div className="mx-auto mt-20 flex max-w-[1200px] flex-col gap-10 px-10 py-20">
        <div className="mx-auto mb-4 flex flex-col items-center justify-center gap-3 text-center">
          <h3 className="font-playfair text-[24px] italic">
            Have any questions?
          </h3>
          <h2 className="font-poppins text-4xl font-[600]">
            Fun, helpful and passionate.
          </h2>
          <p className="font-ubuntu max-w-[500px] text-[15px] font-light">
            If you're making your first steps with Linux don't hesitate to join
            the forums. Linux users are often welcoming, helpful and eager to
            share their experience.
          </p>
        </div>

        <div className="divide-primary-accent flex divide-x divide-dashed">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="relative w-[25%] flex-col gap-2 px-[20px]"
            >
              <h3 className="font-poppins mb-3 text-[22px] font-[500]">
                {item.question}
              </h3>
              <p className="font-ubuntu text-[15px] font-light">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button buttonType="primary">Read More FAQs</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
