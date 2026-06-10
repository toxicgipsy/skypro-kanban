import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/PopBrowse";
import PopExit from "./components/PopExit";
import PopNewCard from "./components/PopNewCard";

function App() {
  return (
      <div className="wrapper">
        <PopExit/>
        <PopNewCard/>
        <PopBrowse/>
        <Header/>
        <Main/>
      </div>
  );
}

export default App;
