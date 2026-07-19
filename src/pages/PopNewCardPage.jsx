import { useOutletContext } from "react-router-dom";
import PopNewCard from "../components/PopNewCard";

function PopNewCardPage() {
  const { handleCreateCard } = useOutletContext();

  return <PopNewCard handleCreateCard={handleCreateCard} />;
}

export default PopNewCardPage;
