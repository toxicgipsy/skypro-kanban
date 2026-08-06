import PopBrowse from "../components/PopBrowse";
import { useContext } from "react";
import { TaskContext } from "../context/contextAPI";

function PopBrowsePage() {
  const { tasks, handleDeleteCard } = useContext(TaskContext);

  return <PopBrowse cards={tasks} handleDeleteCard={handleDeleteCard} />;
}

export default PopBrowsePage;
