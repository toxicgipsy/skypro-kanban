import { useOutletContext } from "react-router-dom";
import PopEditCard from "../components/PopEditCard";

function PopEditCardPage() {
  const { cards, updateCard, deleteCard } = useOutletContext();

  return (
    <PopEditCard
      cards={cards}
      updateCard={updateCard}
      deleteCard={deleteCard}
    />
  );
}

export default PopEditCardPage;
