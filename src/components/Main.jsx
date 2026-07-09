import Column from "./Column";
import { columnStatus } from "../data";
import {
  SContainer,
  SMainBlock,
  SMainContent,
  SMainWrapper,
} from "./Main.styled";

function Main({ cards }) {
  return (
    <>
      <SMainWrapper>
        <SContainer>
          <SMainBlock>
            <SMainContent>
              {columnStatus.map((status) => {
                const filterCards = cards.filter(
                  (item) => item.status === status,
                );
                return (
                  <Column cards={filterCards} title={status} key={status} />
                );
              })}
            </SMainContent>
          </SMainBlock>
        </SContainer>
      </SMainWrapper>
    </>
  );
}

export default Main;
