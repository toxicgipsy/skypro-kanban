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
import { createCard } from "../services/api";

function PopNewCard({ cards, addCard }) {
  const navigate = useNavigate();

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

  const handleCreatedCard = () => {
    if (!formData.title.trim()) return;
    if (!formData.date) return;

    const nextId = Math.max(...cards.map((card) => card.id), 0) + 1;

    const newCard = {
      id: nextId,
      title: formData.title.trim(),
      description: formData.description,
      topic: formData.topic,
      date: formData.date,
      status: columnStatus[0],
    };

    createCard({token, task})
    navigate("/");
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
            <SFormNewCreate
              id="btnCreate"
              type="button"
              onClick={handleCreatedCard}
            >
              Создать задачу
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
}

export default PopNewCard;
