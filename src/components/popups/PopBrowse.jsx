import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { paths } from "../../lib/paths";
import { useTaskContext } from "../../contexts/hooks/useCards";
import { deleteTasks, editTasks } from "../../lib/api";
import { useUserContext } from "../../contexts/hooks/useUser";
import * as S from "../popups/PopBrowse.styled"
import { useEffect, useState } from "react";
import { statusList } from "../../lib/data";
import { useThemesContext } from "../../contexts/hooks/useTheme";
import { darkTheme, lightTheme } from "../../lib/theme";

function PopBrowse() {

  // useEffect(() => {
    
  // }, []);

  const {theme} = useThemesContext();
  const {cards, setCards} = useTaskContext();
  const {user} = useUserContext();
  const navigate = useNavigate();
  
  const { id } = useParams();
  const indexCard = cards.find(item => item._id === id);

  const [editPage, setEditPage] = useState(false);
  const [selectedDay, setSelectedDay] = useState(indexCard?.date);
  const [statusTask, setStatusTask] = useState(indexCard?.status);
  const [editTask, setEditTask] = useState({
    title: indexCard?.title,
    topic: indexCard?.topic,
    status: statusTask,
    description: indexCard?.description,
    date: indexCard?.date,
  });

  const clickDeleteTask = async () => {
    await deleteTasks({id, token: user?.token}).then((response) => { 
      setCards(response.tasks);
      navigate(paths.MAIN);
    }).catch((error) => {
      console.log(error.message);
    })
  }
  
  const clickEditTask = async () => {
    const taskData = { ...editTask, date: selectedDay}
    await editTasks({...taskData, id, token: user?.token}).then((response) => {
      setCards(response.tasks);
      navigate(paths.MAIN);
    }).catch((error) => {
      console.log(error.message);
    })
  }

  let background;
  let color;
  switch (indexCard?.topic) {
    case "Research":
      background = theme ? lightTheme.backgroundGreen : darkTheme.backgroundGreen;
      color = theme ? lightTheme.colorGreen : darkTheme.colorGreen;
      break;
    case "Web Design":
      background = theme ? lightTheme.backgroundOrange : darkTheme.backgroundOrange;
      color = theme ? lightTheme.colorOrange : darkTheme.colorOrange;
      break;
    case "Copywriting":
      background = theme ? lightTheme.backgroundPurple : darkTheme.backgroundPurple;
      color = theme ? lightTheme.colorPurple : darkTheme.colorPurple;
      break;
  }

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>
                {indexCard?.title}
              </S.PopBrowseTtl>
              <S.CategoriesThemeThemeTopActiveCategory $background={background}>
                <S.CategoriesThemeP $color={color}>
                  {indexCard?.topic}
                </S.CategoriesThemeP>
              </S.CategoriesThemeThemeTopActiveCategory>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatusStatus>
              <S.StatusPSubttl>
                Статус
              </S.StatusPSubttl>
              <S.StatusThemes>              
                {!editPage ? 
                <S.StatusTheme className="grey">
                  <S.StatusThemeP className="grey">
                    {indexCard?.status}
                  </S.StatusThemeP>
                </S.StatusTheme> : 
              <>
                {statusList.map((status, index) => (
                  <S.StatusTheme key={index} onClick={() => {setStatusTask(status); setEditTask({...editTask, status: status})}} className={status === statusTask ? "grey" : ""} $editPage={editPage}>
                    <S.StatusThemeP className={status === statusTask ? "grey" : ""}>
                      {status}
                    </S.StatusThemeP>
                  </S.StatusTheme>
                ))}         
              </>}
              </S.StatusThemes>
            </S.PopBrowseStatusStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm
                id="formBrowseCard"
                action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">
                    Описание задачи
                  </S.Subttl>
                  <S.FormBrowseArea
                    style={!editPage ? {background: theme ? lightTheme.readOnlyBg : darkTheme.readOnlyBg} : null}
                    name="text"
                    id="textArea01"
                    readOnly={!editPage}
                    placeholder="Введите описание задачи..."
                    defaultValue={indexCard?.description}
                    onChange={(e) => {setEditTask({...editTask, description: e.target.value})}}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <S.PopBrowseWrap2>
                <S.StatusPSubttl2>
                  Даты
                </S.StatusPSubttl2>
                <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
              </S.PopBrowseWrap2>
              
            </S.PopBrowseWrap>
            {!editPage ? <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBar onClick={() => setEditPage(true)}>
                  Редактировать задачу
                </S.BtnBar>
                <S.BtnBor onClick={clickDeleteTask}>
                  Удалить задачу
                </S.BtnBor>
              </S.BtnGroup>
              <Link to={paths.MAIN}>
                <S.BtnBg>
                  Закрыть
                </S.BtnBg>
              </Link>
            </S.PopBrowseBtnBrowse> : <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <S.BtnBg onClick={clickEditTask}>
                  Сохранить
                </S.BtnBg>
                <S.BtnBor onClick={() => setEditPage(false)}>
                  Отменить
                </S.BtnBor>
                <S.BtnBor onClick={clickDeleteTask}>
                  Удалить задачу
                </S.BtnBor>
              </S.BtnGroup>
              <Link to={paths.MAIN}>
                <S.BtnBg>
                  Закрыть
                </S.BtnBg>
              </Link>
            </S.PopBrowseBtnEdit>}
            
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
    
  );
}

export default PopBrowse;
