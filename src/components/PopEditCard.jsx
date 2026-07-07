import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import {
  SBtnBg,
  SBtnBor,
  SBtnBorA,
  SBtnGroup,
  SCategoriesP,
  SCategoriesTheme,
  SCategoriesThemeP,
  SFormBrowseArea,
  SPopBrowseBlock,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit,
  SPopBrowseContainer,
  SPopBrowseContent,
  SPopBrowseForm,
  SPopBrowseFormBlock,
  SPopBrowseTopBlock,
  SPopBrowseTtl,
  SPopBrowseWrapForm,
  SPopBrowseWrapper,
  SStatus,
  SStatusP,
  SStatusTheme,
  SStatusThemeP,
  SStatusThemes,
  SSubttl,
  SThemeDownCategories,
  SThemeTop,
} from "./PopBrowse.styled";
import { cardList } from "../data";

function PopEditCard() {
  const { id } = useParams();
  const card = cardList.find((card) => card.id === Number(id));
  return (
    <SPopBrowseWrapper id="popBrowse">
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>{card.title}</SPopBrowseTtl>c
              <SThemeTop>
                <SCategoriesTheme $active>
                  <SCategoriesThemeP>Web Design</SCategoriesThemeP>
                </SCategoriesTheme>
              </SThemeTop>
            </SPopBrowseTopBlock>
            <SStatus>
              <SStatusP>Статус</SStatusP>
              <SStatusThemes>
                <SStatusTheme>
                  <SStatusThemeP>Без статуса</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme $active>
                  <SStatusThemeP>Нужно сделать</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme>
                  <SStatusThemeP>В работе</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme>
                  <SStatusThemeP>Тестирование</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme>
                  <SStatusThemeP>Готово</SStatusThemeP>
                </SStatusTheme>
              </SStatusThemes>
            </SStatus>
            <SPopBrowseWrapForm>
              <SPopBrowseForm id="formBrowseCard" action="#">
                <SPopBrowseFormBlock>
                  <SSubttl htmlFor="textArea01">Описание задачи</SSubttl>
                  <SFormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></SFormBrowseArea>
                </SPopBrowseFormBlock>
              </SPopBrowseForm>
              <Calendar />
            </SPopBrowseWrapForm>
            <SThemeDownCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesTheme $active>
                <SCategoriesThemeP>Web Design</SCategoriesThemeP>
              </SCategoriesTheme>
            </SThemeDownCategories>
            <SPopBrowseBtnBrowse>
              <SBtnGroup>
                <SBtnBor>
                  <SBtnBorA to={`/card/${card.id}/edit`}>
                    Редактировать задачу
                  </SBtnBorA>
                </SBtnBor>
                <SBtnBor>
                  <SBtnBorA to="#">Удалить задачу</SBtnBorA>
                </SBtnBor>
              </SBtnGroup>
              <SBtnBg>
                <SBtnBorA to="/">Закрыть</SBtnBorA>
              </SBtnBg>
            </SPopBrowseBtnBrowse>
            <SPopBrowseBtnEdit $hide>
              <SBtnGroup>
                <SBtnBg>
                  <SBtnBorA to="#">Сохранить</SBtnBorA>
                </SBtnBg>
                <SBtnBor>
                  <SBtnBorA to="#">Отменить</SBtnBorA>
                </SBtnBor>
                <SBtnBor id="btnDelete">
                  <SBtnBorA to="#">Удалить задачу</SBtnBorA>
                </SBtnBor>
              </SBtnGroup>
              <SBtnBg>
                <SBtnBorA to="/">Закрыть</SBtnBorA>
              </SBtnBg>
            </SPopBrowseBtnEdit>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowseWrapper>
  );
}

export default PopEditCard;
