import Card from "./Card";

export function Column() {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
          <Card/>
      </div>
    </>
  );
}

export default Column;