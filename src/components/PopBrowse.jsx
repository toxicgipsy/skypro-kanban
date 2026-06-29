import Calendar from "./Calendar";
import {
  SBtnBg,
  SBtnBor,
  SBtnBorA,
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
  SPopBrowseWrap,
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

export function PopBrowse() {
  return (
    <SPopBrowseWrapper id="popBrowse">
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>Название задачи</SPopBrowseTtl>
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
                <SStatusTheme>
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
              <SPopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <SPopBrowseFormBlock>
                  <SSubttl htmlFor="textArea01">
                    Описание задачи
                  </SSubttl>
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
              <div className="btn-group">
                <SBtnBor>
                  <SBtnBorA href="#">Редактировать задачу</SBtnBorA>
                </SBtnBor>
                <SBtnBor>
                  <SBtnBorA href="#">Удалить задачу</SBtnBorA>
                </SBtnBor>
              </div>
              <SBtnBg>
                <SBtnBorA href="#">Закрыть</SBtnBorA>
              </SBtnBg>
            </SPopBrowseBtnBrowse>
            <SPopBrowseBtnEdit $hide>
              <div className="btn-group">
                <SBtnBg>
                  <SBtnBorA href="#">Сохранить</SBtnBorA>
                </SBtnBg>
                <SBtnBor>
                  <SBtnBorA href="#">Отменить</SBtnBorA>
                </SBtnBor>
                <SBtnBor id="btnDelete">
                  <SBtnBorA href="#">Удалить задачу</SBtnBorA>
                </SBtnBor>
              </div>
              <SBtnBg>
                <SBtnBorA href="#">Закрыть</SBtnBorA>
              </SBtnBg>
            </SPopBrowseBtnEdit>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowseWrapper>
  );
}

export default PopBrowse;
