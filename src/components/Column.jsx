import { cardList } from "../data";
import Card from "./Card";
import { SColumnTitle, SColumnTitlP, SMainColumn } from "./Column.styled";

export function Column({ title }) {
  return (
    <>
      <SMainColumn>
        <SColumnTitle>
          <SColumnTitlP>{title}</SColumnTitlP>
        </SColumnTitle>
        {cardList
          .filter((item) => item.status === title)
          .map((item) => (
            <Card item={item} key={item.id} />
          ))}
      </SMainColumn>
    </>
  );
}

export default Column;
