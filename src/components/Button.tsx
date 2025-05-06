type ButtonProps = {
  buttonType?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
};

const Button = ({ buttonType, children }: ButtonProps) => {
  const isPrimary = buttonType === "primary";
  const isSecondary = buttonType === "secondary";
  const isTertiary = buttonType === "tertiary";

  const primaryStyle =
    "bg-gradient-to-br from-secondary-accent to-tertiary-accent hover:from-tertiary-accent hover:to-secondary-accent text-[15px] px-[18px] py-[9px]";
  const secondaryStyle =
    "text-altwhite hover:bg-altwhite hover:text-altblack border-altwhite border-2 px-[16px] py-[8px] bg-transparent text-[15px]";
  const tertiaryStyle =
    "text-[13.5px] bg-altwhite text-altblack hover:bg-altgray px-[14px] py-[7px]";
  const defaulStyle =
    "bg-altwhite text-altblack hover:bg-altgray text-[15px] px-[18px] py-[9px]";

  return (
    <button
      className={`${isPrimary && primaryStyle} ${isSecondary && secondaryStyle} ${isTertiary && tertiaryStyle} ${!isPrimary && !isSecondary && !isTertiary && defaulStyle} font-ubuntu cursor-pointer rounded text-nowrap transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
