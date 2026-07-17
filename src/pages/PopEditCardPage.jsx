import { useOutletContext } from "react-router-dom";
import PopEditCard from "../components/PopEditCard";

function PopEditCardPage() {
  const { cards, handleUpdateCard, handleDeleteCard, setError } =
    useOutletContext();

  return (
    <PopEditCard
      cards={cards}
      setError={setError}
      handleUpdateCard={handleUpdateCard}
      handleDeleteCard={handleDeleteCard}
    />
  );
}

export default PopEditCardPage;
