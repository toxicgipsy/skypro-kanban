import Card from "./Card";
import { SColumnTitle, SColumnTitlP, SMainColumn } from "./Column.styled";

export function Column({ title, cards }) {
  return (
    <SMainColumn>
      <SColumnTitle>
        <SColumnTitlP>{title}</SColumnTitlP>
      </SColumnTitle>
      {cards.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </SMainColumn>
  );
}

export default Column;
