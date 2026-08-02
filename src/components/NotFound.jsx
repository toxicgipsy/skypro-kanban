import {
  HomeLink,
  NotFoundImage,
  NotFoundPage,
  NotFoundTitle,
} from "./NotFound.styled";
import notFoundPage from "../assets/not-found.svg";

function NotFound() {
  return (
    <NotFoundPage>
      <NotFoundImage src={notFoundPage} alt="" />
      <NotFoundTitle>Страница не найдена</NotFoundTitle>
      <HomeLink to="/">Вернуться на главную страницу</HomeLink>
    </NotFoundPage>
  );
}

export default NotFound;
