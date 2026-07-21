import { useOutletContext } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";

function PopBrowsePage() {
  const { cards, handleDeleteCard } = useOutletContext();

  return (
    <PopBrowse
      cards={cards}
      handleDeleteCard={handleDeleteCard}
    />
  );
}

export default PopBrowsePage;
