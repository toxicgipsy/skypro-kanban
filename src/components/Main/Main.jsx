import { statusList } from "../../lib/data";
import Column from "../Column/Column";
import * as S from "./Main.styled";
import { Container } from "../../style/common.style";

function Main({ cards }) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status, index) => (
              <Column
                key={index}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
