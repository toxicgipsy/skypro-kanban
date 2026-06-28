import Card from "./Card";

export function Column({ title, cards }) {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        {cards.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Column;
