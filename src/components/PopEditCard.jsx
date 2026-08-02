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
import { formatDateForApi, formatDateForCalendar } from "../utils/date";

function PopEditCard({ cards, handleUpdateCard, handleDeleteCard }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pendingAction, setPendingAction] = useState(null);
  const [submitError, setSubmitError] = useState("");

  const isSubmitting = pendingAction !== null;

  const card = cards.find((card) => card._id === id);
  const [formData, setFormData] = useState({
    title: card?.title,
    description: card?.description || "",
    status: card?.status,
    topic: card?.topic,
    date: formatDateForCalendar(card?.date),
  });
  if (!card) return <NotFoundPage />;

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
  };

  const handleSave = async () => {
    if (isSubmitting) return;

    setSubmitError("");

    if (formData.description.trim() === "") {
      setSubmitError("Заполни описание");
      return;
    }

    const apiDate = formatDateForApi(formData.date);
    if (!apiDate) {
      setSubmitError("Выбери корректную дату");
      return;
    }

    const task = {
      title: formData.title,
      description: formData.description.trim(),
      topic: formData.topic,
      status: formData.status,
      date: apiDate,
    };
    try {
      setPendingAction("save");

      await handleUpdateCard(id, task);

      navigate(`/card/${id}`);
    } catch (error) {
      setSubmitError(error.message || "Не удалось сохранить задачу");
    } finally {
      setPendingAction(null);
    }
  };

  const handleDelete = async () => {
    if (isSubmitting) return;

    setSubmitError("");

    try {
      setPendingAction("delete");

      await handleDeleteCard(id);

      navigate(`/`);
    } catch (error) {
      setSubmitError(error.message || "Не удалось удалить задачу");
    } finally {
      setPendingAction(null);
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
              <Calendar
                selectedDate={formData.date}
                onDateChange={(date) => setFormData({ ...formData, date })}
              />
            </SPopBrowseWrapForm>
            <SThemeDownCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesTheme $active>
                <SCategoriesThemeP>{formData.topic}</SCategoriesThemeP>
              </SCategoriesTheme>
            </SThemeDownCategories>
            {submitError && <p role="alert">{submitError}</p>}
            <SPopBrowseBtnEdit>
              <SBtnGroup>
                <SBtnBg
                  type="button"
                  onClick={handleSave}
                  disabled={isSubmitting}
                >
                  {pendingAction === "save" ? "Сохранение..." : "Сохранить"}
                </SBtnBg>
                <SBtnBor>
                  <SBtnBorA to={`/card/${id}`}>Отменить</SBtnBorA>
                </SBtnBor>
                <SBtnBor
                  type="button"
                  onClick={handleDelete}
                  disabled={isSubmitting}
                >
                  {pendingAction === "delete"
                    ? "Удаление..."
                    : "Удалить задачу"}
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
