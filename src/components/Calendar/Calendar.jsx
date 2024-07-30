import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useThemesContext } from "../../contexts/hooks/useTheme";
import { StyledDayPicker, Footer } from "./Calendar.styled";
import { darkTheme, lightTheme } from "../../lib/theme";

function Calendar({ selectedDay, setSelectedDay }) {
  const { theme } = useThemesContext();

  const footer = selectedDay ? (
    <Footer>
      Срок исполнения:{" "}
      <span style={{ color: theme ? lightTheme.color : darkTheme.color }}>
        {format(selectedDay, "P", { locale: ru })}
      </span>
    </Footer>
  ) : (
    <Footer>Пожалуйста, выбери день</Footer>
  );

  const classNames = {
    head: "custom-head",
    day: "custom-day",
    day_selected: "custom-day_selected",
    caption: "custom-caption",
  };

  return (
    <StyledDayPicker theme={theme}>
      <DayPicker
        locale={ru}
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
        classNames={classNames}
      />
    </StyledDayPicker>
  );
}

export default Calendar;
