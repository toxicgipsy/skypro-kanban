import Calendar from "./Calendar";
import {
  SCategories,
  SCategoriesP,
  SCategoriesTheme,
  SCategoriesThemeP,
  SCategoriesThemes,
  SFormNewArea,
  SFormNewBlock,
  SFormNewCreate,
  SFormNewInput,
  SPopNewCard,
  SPopNewCardBlock,
  SPopNewCardClose,
  SPopNewCardContainer,
  SPopNewCardContent,
  SPopNewCardForm,
  SPopNewCardTtl,
  SPopNewCardWrap,
  SSubttl,
} from "./PopNewCard.styled";

function PopNewCard() {
  return (
    <SPopNewCard id="popNewCard">
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose href="#">&#10006;</SPopNewCardClose>
            <SPopNewCardWrap>
              <SPopNewCardForm id="formNewCard" action="#">
                <SFormNewBlock>
                  <SSubttl htmlFor="formTitle">Название задачи</SSubttl>
                  <SFormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </SFormNewBlock>
                <SFormNewBlock>
                  <SSubttl>Описание задачи</SSubttl>
                  <SFormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></SFormNewArea>
                </SFormNewBlock>
              </SPopNewCardForm>
              <Calendar />
            </SPopNewCardWrap>
            <SCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesThemes>
                <SCategoriesTheme $themeColor="_orange" $active>
                  <SCategoriesThemeP>Web Design</SCategoriesThemeP>
                </SCategoriesTheme>
                <SCategoriesTheme $themeColor="_green">
                  <SCategoriesThemeP>Research</SCategoriesThemeP>
                </SCategoriesTheme>
                <SCategoriesTheme $themeColor="_purple">
                  <SCategoriesThemeP>Copywriting</SCategoriesThemeP>
                </SCategoriesTheme>
              </SCategoriesThemes>
            </SCategories>
            <SFormNewCreate id="btnCreate" type="button">
              Создать задачу
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
}

export default PopNewCard;
