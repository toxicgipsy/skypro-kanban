import { useOutletContext } from "react-router-dom";
import PopEditCard from "../components/PopEditCard";

function PopEditCardPage() {
  const { cards, handleUpdateCard, handleDeleteCard } = useOutletContext();

  return (
    <PopEditCard
      cards={cards}
      handleUpdateCard={handleUpdateCard}
      handleDeleteCard={handleDeleteCard}
    />
  );
}

export default PopEditCardPage;
