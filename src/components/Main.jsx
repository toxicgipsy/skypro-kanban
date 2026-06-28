import Column from "./Column";
import { cardList, columnStatus } from "../data";

export function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {columnStatus.map((status) => {
                const filterCards = cardList.filter(
                  (item) => item.status === status,
                );

                return (
                  <Column cards={filterCards} title={status} key={status} />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
