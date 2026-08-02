import Column from "./Column";
import { columnStatus } from "../data";
import {
  EmptyCards,
  ErrorModule,
  SContainer,
  SMainBlock,
  SMainContent,
  SMainWrapper,
} from "./Main.styled";

function Main({ cards, error }) {
  const emptyCards = cards.length === 0;
  return (
    <SMainWrapper>
      <SContainer>
        <SMainBlock>
          {error ? (
            <ErrorModule>{error}</ErrorModule>
          ) : emptyCards ? (
            <EmptyCards>Новых задач нет</EmptyCards>
          ) : (
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
          )}
        </SMainBlock>
      </SContainer>
    </SMainWrapper>
  );
}

export default Main;
