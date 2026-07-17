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
import NotFoundPage from "../pages/NotFoundPage";
import { useState } from "react";
import { color } from "../data";

function PopEditCard({ cards, handleUpdateCard, setError }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cards.find((card) => card._id === id);
  const [formData, setFormData] = useState({
    title: card?.title,
    description: card?.description || "",
    status: card?.status,
    topic: card?.topic,
    date: card?.date,
  });
  if (!card) return <NotFoundPage />;

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
  };

  const task = {
    title: formData.title,
    description: formData.description,
    topic: formData.topic,
    date: formData.date,
    status: formData.status,
  };
  const handleSave = async () => {
    setFormData({ ...formData, task });

    try {
      await handleUpdateCard(id, task);
      navigate(`/card/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const themeColor = color[formData.topic] || "_gray";

  return (
    <SPopBrowseWrapper id="popBrowse">
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>{formData.title}</SPopBrowseTtl>
              <SThemeTop>
                <SCategoriesTheme $themeColor={themeColor} $active>
                  <SCategoriesThemeP>{formData.topic}</SCategoriesThemeP>
                </SCategoriesTheme>
              </SThemeTop>
            </SPopBrowseTopBlock>
            <SStatus>
              <SStatusP>{formData.status}</SStatusP>
              <SStatusThemes>
                <SStatusTheme
                  $themeColor={themeColor}
                  $active={formData.status === "Без статуса"}
                  onClick={() => handleStatusChange("Без статуса")}
                >
                  <SStatusThemeP>Без статуса</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  $themeColor={themeColor}
                  $active={formData.status === "Нужно сделать"}
                  onClick={() => handleStatusChange("Нужно сделать")}
                >
                  <SStatusThemeP>Нужно сделать</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  $themeColor={themeColor}
                  $active={formData.status === "В работе"}
                  onClick={() => handleStatusChange("В работе")}
                >
                  <SStatusThemeP>В работе</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  $themeColor={themeColor}
                  $active={formData.status === "Тестирование"}
                  onClick={() => handleStatusChange("Тестирование")}
                >
                  <SStatusThemeP>Тестирование</SStatusThemeP>
                </SStatusTheme>
                <SStatusTheme
                  $themeColor={themeColor}
                  $active={formData.status === "Готово"}
                  onClick={() => handleStatusChange("Готово")}
                >
                  <SStatusThemeP>Готово</SStatusThemeP>
                </SStatusTheme>
              </SStatusThemes>
            </SStatus>
            <SPopBrowseWrapForm>
              <SPopBrowseForm id="formBrowseCard" action="#">
                <SPopBrowseFormBlock>
                  <SSubttl htmlFor="textArea01">{card.title}</SSubttl>
                  <SFormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleDescriptionChange}
                  ></SFormBrowseArea>
                </SPopBrowseFormBlock>
              </SPopBrowseForm>
              <Calendar />
            </SPopBrowseWrapForm>
            <SThemeDownCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesTheme $active>
                <SCategoriesThemeP>{formData.topic}</SCategoriesThemeP>
              </SCategoriesTheme>
            </SThemeDownCategories>
            <SPopBrowseBtnEdit>
              <SBtnGroup>
                <SBtnBg type="button" onClick={handleSave}>
                  Сохранить
                </SBtnBg>
                <SBtnBor>
                  <SBtnBorA to={`/card/${id}`}>Отменить</SBtnBorA>
                </SBtnBor>
                <SBtnBor id="btnDelete">
                  <SBtnBorA>Удалить задачу</SBtnBorA>
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
