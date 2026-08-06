import PopEditCard from "../components/PopEditCard";
import { useContext } from "react";
import { TaskContext } from "../context/contextAPI";

function PopEditCardPage() {
  const { tasks, handleUpdateCard, handleDeleteCard } = useContext(TaskContext);

  return (
    <PopEditCard
      cards={tasks}
      handleUpdateCard={handleUpdateCard}
      handleDeleteCard={handleDeleteCard}
    />
  );
}

export default PopEditCardPage;
