type ButtonProps = {
  action?: () => void;
  buttonType?: "primary" | "secondary" | "tertiary" | "dark";
  children: React.ReactNode;
};

const Button = ({ action, buttonType, children }: ButtonProps) => {
  const isPrimary = buttonType === "primary";
  const isSecondary = buttonType === "secondary";
  const isTertiary = buttonType === "tertiary";
  const isDark = buttonType === "dark";

  const primaryStyle =
    "bg-gradient-to-br from-secondary-accent to-tertiary-accent hover:from-tertiary-accent hover:to-secondary-accent text-altwhite text-[15px] px-[18px] py-[9px]";
  const secondaryStyle =
    "text-altwhite hover:bg-altwhite hover:text-altblack border-altwhite border-2 px-[16px] py-[8px] bg-transparent text-[15px]";
  const tertiaryStyle =
    "text-[13.5px] bg-altwhite text-altblack hover:bg-altgray px-[14px] py-[7px]";
  const darkStyle = "text-altwhite hover:bg-[#2b2e34] text-[15px] px-[18px] py-[9px] bg-altblack";
  const defaulStyle =
    "bg-altwhite text-altblack hover:bg-altgray text-[15px] px-[18px] py-[9px]";

  const classNames = `
    ${isPrimary ? primaryStyle : ""} 
    ${isSecondary ? secondaryStyle : ""} 
    ${isTertiary ? tertiaryStyle : ""} 
    ${isDark ? darkStyle : ""}
    ${!isPrimary && !isSecondary && !isTertiary && !isDark ? defaulStyle : ""} 
    font-ubuntu cursor-pointer rounded text-nowrap transition-all duration-300 ease-in-out
  `;

  return (
    <button onClick={action} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
