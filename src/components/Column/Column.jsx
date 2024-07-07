import Card from "../Card/Card";
import * as S from "./Column.styled";

function Column({ title, cards }) {
  return (
    <S.Column>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </S.Cards>
    </S.Column>
  );
}

export default Column;
