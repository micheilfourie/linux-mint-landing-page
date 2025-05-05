type CardType = {
  cardType?: "primary";
  children: React.ReactNode;
};

const Card = ({ cardType, children }: CardType) => {
  return (
    <div
      className={`${cardType === "primary" && "from-secondary-accent to-tertiary-accent bg-gradient-to-br"} bg-altgray flex flex-col gap-2 p-10`}
    >
      {children}
    </div>
  );
};

export default Card;
