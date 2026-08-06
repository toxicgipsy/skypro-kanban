import { useContext } from "react";
import PopNewCard from "../components/PopNewCard";
import { TaskContext } from "../context/contextAPI";

function PopNewCardPage() {
  const { handleCreateCard } = useContext(TaskContext);

  return <PopNewCard handleCreateCard={handleCreateCard} />;
}

export default PopNewCardPage;
