import { useNavigate, useParams } from "react-router-dom";
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
import { color } from "../data";
import { formatDateForCalendar } from "../utils/date";
import { useState } from "react";

function PopBrowse({ cards, handleDeleteCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const []
  const card = cards.find((card) => card._id === id);
  if (!card) return null;

  const handleDelete = async () => {
    try {
      await handleDeleteCard(id);
      navigate(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  const themeColor = color[card.topic] || "_gray";
  return (
    <SPopBrowseWrapper id="popBrowse">
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>{card.title}</SPopBrowseTtl>
              <SThemeTop>
                <SCategoriesTheme $themeColor={themeColor} $active>
                  <SCategoriesThemeP>{card.topic}</SCategoriesThemeP>
                </SCategoriesTheme>
              </SThemeTop>
            </SPopBrowseTopBlock>
            <SStatus>
              <SStatusP>{card.status}</SStatusP>
              <SStatusThemes>
                <SStatusTheme $active={card.status === "Без статуса"}>
                  <SStatusThemeP>Без статуса</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme $active={card.status === "Нужно сделать"}>
                  <SStatusThemeP>Нужно сделать</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme $active={card.status === "В работе"}>
                  <SStatusThemeP>В работе</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme $active={card.status === "Тестирование"}>
                  <SStatusThemeP>Тестирование</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme $active={card.status === "Готово"}>
                  <SStatusThemeP>Готово</SStatusThemeP>
                </SStatusTheme>
              </SStatusThemes>
            </SStatus>
            <SPopBrowseWrapForm>
              <SPopBrowseForm id="formBrowseCard" action="#">
                <SPopBrowseFormBlock>
                  <SSubttl htmlFor="textArea01">{card.title}</SSubttl>
                  <SFormBrowseArea
                    value={card.description || ""}
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></SFormBrowseArea>
                </SPopBrowseFormBlock>
              </SPopBrowseForm>
              <Calendar selectedDate={formatDateForCalendar(card.date)} />
            </SPopBrowseWrapForm>
            <SThemeDownCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesTheme $themeColor={themeColor} $active>
                <SCategoriesThemeP>{card.topic}</SCategoriesThemeP>
              </SCategoriesTheme>
            </SThemeDownCategories>
            <SPopBrowseBtnBrowse>
              <SBtnGroup>
                <SBtnBor>
                  <SBtnBorA to={`/card/${card._id}/edit`}>
                    Редактировать задачу
                  </SBtnBorA>
                </SBtnBor>
                <SBtnBor onClick={handleDelete}>Удалить задачу</SBtnBor>
              </SBtnGroup>
              <SBtnBg>
                <SBtnBorA to="/">Закрыть</SBtnBorA>
              </SBtnBg>
            </SPopBrowseBtnBrowse>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowseWrapper>
  );
}

export default PopBrowse;
