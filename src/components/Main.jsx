import Column from "./Column";
import { cardList, columnStatus } from "../data";
import { SContainer, SMainBlock, SMainContent, SMainWrapper } from "./Main.styled";

export function Main() {
  return (
    <>
      <SMainWrapper>
        <SContainer>
          <SMainBlock>
            <SMainContent>
              {columnStatus.map((status) => {
                const filterCards = cardList.filter(
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
