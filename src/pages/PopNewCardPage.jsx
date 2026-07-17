import { useOutletContext } from "react-router-dom";
import PopNewCard from "../components/PopNewCard";

function PopNewCardPage() {
  const { handleCreateCard, setError } = useOutletContext();

  return <PopNewCard handleCreateCard={handleCreateCard} setError={setError} />;
}

export default PopNewCardPage;
