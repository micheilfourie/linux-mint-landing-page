type CardType = {
  cardType?: "primary" | "secondary";
  children: React.ReactNode;
};

const Card = ({ cardType, children }: CardType) => {
  const isPrimary = cardType === "primary";
  const isSecondary = cardType === "secondary";

  const primaryStyle =
    "from-secondary-accent to-tertiary-accent bg-gradient-to-br";
  const secondaryStyle = "bg-altwhite";

  return (
    <div
      className={`${isPrimary && primaryStyle} ${isSecondary && secondaryStyle} ${!isPrimary && !isSecondary && "bg-altgray"} flex flex-col gap-2 p-10`}
    >
      {children}
    </div>
  );
};

export default Card;
