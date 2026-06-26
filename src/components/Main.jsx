import Column from "./Column";
import { columnStatus } from "../data";

export function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {cardList.
                filter((item) => item.status === title)}
              {columnStatus.map((status) => (
                <Column title={status} key={status} />
              ).cardList.
                filter((item) => item.status === title))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
