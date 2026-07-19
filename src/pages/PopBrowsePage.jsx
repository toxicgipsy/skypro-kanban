import { useOutletContext } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";

function PopBrowsePage() {
  const { cards, handleDeleteCard, setError } = useOutletContext();

  return (
    <PopBrowse
      cards={cards}
      handleDeleteCard={handleDeleteCard}
      setError={setError}
    />
  );
}

export default PopBrowsePage;
