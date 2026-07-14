import {
  SCenteredFourOFour,
  SCenteredPage,
  SCenteredPageText,
} from "../styles/Common.styled";

function NotFound() {
  return (
    <>
      <SCenteredPage>
        <SCenteredFourOFour>404</SCenteredFourOFour>
        <SCenteredPageText>Страница не найдена</SCenteredPageText>
      </SCenteredPage>
    </>
  );
}

export default NotFound;
