import { CardContentType } from "../lib/types";
import Card from "./Card";

const FeatureCardMap = ({ cards }: { cards: CardContentType[] }) => (
  <>
    {cards.map((card, index) => {
      const isPrimary = card.cardType === "primary";
      const textColor = isPrimary ? "text-altwhite" : "text-altblack";

      return (
        <Card key={index} cardType={card.cardType}>
          <img src={card.icon} alt="" className="mb-2 size-12" />
          <h3 className={`${textColor} font-poppins text-2xl font-[500]`}>
            {card.title}
          </h3>
          <p className={`${textColor} font-ubuntu text-[15px] font-light`}>
            {card.description}
          </p>
        </Card>
      );
    })}
  </>
);

export default FeatureCardMap;
