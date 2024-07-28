import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Такой страницы нет :( </h1>
      <button onClick={handleGoHome}>Вернуться на главную</button>
    </>
  );
};

export default NotFoundPage;
