import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { paths } from "../../lib/paths";
import { useState } from "react";
import { useUserContext } from "../../contexts/hooks/useUser";
import { postTask } from "../../lib/api";
import { useTaskContext } from "../../contexts/hooks/useCards";
import * as S from "../popups/PopNewCard.styled"

function PopNewCard() {

  const {user} = useUserContext();
  const {setCards} = useTaskContext();
  const navigete = useNavigate();
  const [selectedDay, setSelectedDay] = useState();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const [errorAddTask, setErrorAddTask] = useState(null);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  
  const handleTitle = (e) => {
    setNewTask({...newTask, title: e.target.value});
    if (newTask.title.length > 0) {
      setErrorTitle(false);
      setErrorAddTask(null);
    }
  }

  const handleDescription = (e) => {
    setNewTask((newTask) => ({...newTask, description: e.target.value}));
    if (newTask.title.length > 0) {
      setErrorDescription(false);
      setErrorAddTask(null);
    }
  }

  const addNewTask = async () => {

      if (!newTask.title) {
        setErrorAddTask("Заполни название задачи");
        setErrorTitle(true);
        return 
      } else if (!newTask.description) {
        setErrorAddTask("Заполни описание задачи");
        setErrorDescription(true);
        return 
      } else if (!newTask.topic) {
        return setErrorAddTask("Заполни тему задачи");
      }
    
    const taskData = { ...newTask, date:selectedDay};
    await postTask({...taskData, token: user?.token}).then((response) => {
      setCards(response.tasks);
      navigete(-1);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>
              Создание задачи
            </S.PopNewCardTtl>
            <Link to={paths.MAIN}>
              <S.PopNewCardClose>
                &#10006;
              </S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardFormFormNew id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">
                    Название задачи
                  </S.Subttl>
                  <S.FormNewInput
                  $errorTitle={errorTitle}
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                  onChange={handleTitle}>
                  </S.FormNewInput>
                </S.FormNewBlock>  
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">
                    Описание задачи
                  </S.Subttl>
                  <S.FormNewArea
                  $errorDescription={errorDescription}
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  onChange={handleDescription}>
                  </S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardFormFormNew>
              <S.FormNewBlock>
                <S.CategoriesPSubttl2>Даты</S.CategoriesPSubttl2>
                <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
              </S.FormNewBlock>
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
              <S.LabelOrange $opacity={newTask.topic}>
                Web Design
                <S.ModalInputRadio type="radio" name="topic" value="Web Design" onChange={(e) => {setNewTask({...newTask, topic: e.target.value}); setErrorAddTask(null);}}>
                </S.ModalInputRadio>
              </S.LabelOrange>
              <S.LabelGreen $opacity={newTask.topic}>
                Research
                <S.ModalInputRadio type="radio" name="topic" value="Research" onChange={(e) => {setNewTask({...newTask, topic: e.target.value}); setErrorAddTask(null);}}>
                </S.ModalInputRadio>
              </S.LabelGreen>
              <S.LabelPurple $opacity={newTask.topic}>
              Copywriting
                <S.ModalInputRadio type="radio" name="topic" value="Copywriting" onChange={(e) => {setNewTask({...newTask, topic: e.target.value}); setErrorAddTask(null);}}>
                </S.ModalInputRadio>
              </S.LabelPurple>
            </S.Categories>
            {errorAddTask ? <span style={{color: "red"}}>{errorAddTask}</span> : null}
            <S.FormNewCreate id="btnCreate" onClick={addNewTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
