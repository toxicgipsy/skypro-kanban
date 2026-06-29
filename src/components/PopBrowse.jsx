import Calendar from "./Calendar";
import {
  SCategoriesTheme,
  SCategoriesThemeP,
  SFormBrowseArea,
  SPopBrowseBlock,
  SPopBrowseContainer,
  SPopBrowseContent,
  SPopBrowseForm,
  SPopBrowseFormBlock,
  SPopBrowseTopBlock,
  SPopBrowseTtl,
  SPopBrowseWrap,
  SPopBrowseWrapForm,
  SPopBrowseWrapper,
  SStatusP,
  SStatusTheme,
  SStatusThemeP,
  SStatusThemes,
  SSubttl,
} from "./PopBrowse.styled";

export function PopBrowse() {
  return (
    <SPopBrowseWrapper id="popBrowse">
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>Название задачи</SPopBrowseTtl>
              <SCategoriesTheme $active>
                <SCategoriesThemeP>Web Design</SCategoriesThemeP>
              </SCategoriesTheme>
            </SPopBrowseTopBlock>
            <SPopBrowseWrap>
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
            </SPopBrowseWrap>
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
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowseWrapper>
  );
}

export default PopBrowse;
