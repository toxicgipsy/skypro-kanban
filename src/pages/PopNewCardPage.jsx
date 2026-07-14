import { useOutletContext } from "react-router-dom";
import PopNewCard from "../components/PopNewCard";

function PopNewCardPage() {
  const { cards, addCard } = useOutletContext();

  return <PopNewCard cards={cards} addCard={addCard} />;
}

export default PopNewCardPage;
