import Column from "./Column";
import { columnStatus } from "../data";

export function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {columnStatus.map((status) => (
                <Column title={status} key={status} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
