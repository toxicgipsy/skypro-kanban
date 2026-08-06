import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { columnStatus } from "../data";
import { formatDateForApi } from "../utils/date";

function PopNewCard({ handleCreateCard }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Web Design",
    date: "",
  });

  const categories = [
    { title: "Web Design", color: "_orange" },
    { title: "Research", color: "_green" },
    { title: "Copywriting", color: "_purple" },
    { title: "Dev", color: "_blue" },
    { title: "PM", color: "_yellow" },
  ];

  const handleCreatedCard = async () => {
    if (isSubmitting) return;

    setSubmitError("");

    if (!formData.title.trim()) {
      setSubmitError("Заполни заголовок");
      return;
    }

    if (!formData.description.trim()) {
      setSubmitError("Заполни описание");
      return;
    }

    if (!formData.topic) {
      setSubmitError("Выбери категорию");
      return;
    }

    if (!formData.date) {
      setSubmitError("Выбери дату");
      return;
    }

    const apiDate = formatDateForApi(formData.date);

    if (!apiDate) {
      setSubmitError("Выбрана некорректная дата");
      return;
    }

    const newCard = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      topic: formData.topic,
      date: apiDate,
      status: columnStatus[0],
    };

    try {
      setIsSubmitting(true);

      await handleCreateCard(newCard);

      navigate("/");
    } catch (error) {
      setSubmitError(error.message || "Не удалось создать задачу");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SPopNewCard id="popNewCard">
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose to="/">&#10006;</SPopNewCardClose>
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
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </SFormNewBlock>
                <SFormNewBlock>
                  <SSubttl>Описание задачи</SSubttl>
                  <SFormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></SFormNewArea>
                </SFormNewBlock>
              </SPopNewCardForm>
              <Calendar
                selectedDate={formData.date}
                onDateChange={(date) => setFormData({ ...formData, date })}
              />
            </SPopNewCardWrap>
            <SCategories>
              <SCategoriesP>Категория</SCategoriesP>
              <SCategoriesThemes>
                {categories.map((category) => (
                  <SCategoriesTheme
                    key={category.title}
                    $themeColor={category.color}
                    $active={formData.topic === category.title}
                    onClick={() =>
                      setFormData({ ...formData, topic: category.title })
                    }
                  >
                    <SCategoriesThemeP>{category.title}</SCategoriesThemeP>
                  </SCategoriesTheme>
                ))}
              </SCategoriesThemes>
            </SCategories>
            {submitError && <p role="alert">{submitError}</p>}
            <SFormNewCreate
              id="btnCreate"
              type="button"
              onClick={handleCreatedCard}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Создание..." : "Создать задачу"}
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
}

export default PopNewCard;
