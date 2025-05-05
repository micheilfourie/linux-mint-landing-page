type ButtonProps = {
  buttonType?: "secondary" | "tertiary";
  children: React.ReactNode;
};

const Button = ({ buttonType, children }: ButtonProps) => {
  const isSecondary = buttonType === "secondary";
  const isTertiary = buttonType === "tertiary";
  const secondaryStyle =
    "text-altwhite hover:bg-altwhite hover:text-altblack border-altwhite border-2 bg-transparent text-[15px]";

  return (
    <button
      className={`${isSecondary && secondaryStyle} ${isTertiary && "text-[13.5px]"} ${!isTertiary && "text-[15px]"} bg-altwhite text-altblack font-ubuntu hover:bg-altgray cursor-pointer rounded px-[16px] py-[8px] text-nowrap transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
