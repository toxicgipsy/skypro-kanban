import { useOutletContext } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";

function PopBrowsePage() {
  const { cards } = useOutletContext();

  return <PopBrowse cards={cards} />;
}

export default PopBrowsePage;
