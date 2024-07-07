import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useThemesContext } from '../../contexts/hooks/useTheme';
import { darkTheme, lightTheme } from '../../lib/theme';

function Calendar({selectedDay, setSelectedDay}) {

  const {theme} = useThemesContext();

  const footer = selectedDay ? (
    <p style={{color: "#94A6BE", fontSize: "12px", marginTop: "18px"}}>Срок исполнения: <span style={{color: theme ? lightTheme.color : darkTheme.color}}>{format(selectedDay, 'P', {locale: ru})}</span></p>
  ) : (
    <p style={{color: "#94A6BE", fontSize: "12px", marginTop: "18px"}}>Пожалуйста, выбери день</p>
  );

  const ClassNames = {
    head: 'custom-head',
    day: 'custom-day',
    day_selected: 'custom-day_selected',
    caption: 'custom-caption',
  };

  return (
    <>
    <style>
      {
        `
        .rdp {--rdp-caption-font-size: 14px; font-family: "Roboto", Arial, Helvetica, sans-serif; margin-top: -8px;}
        .custom-head { color: #94A6BE; font-size: 14px; line-height: 25px; font-weight: 600; }
        .custom-day { color: #94A6BE; font-size: 12px; line-height: 1; width: 22px;
          height: 22px;
          margin: 2px; border-radius: 50%;}
        .custom-day_selected { background-color: #94A6BE; color: ${theme ? darkTheme.color : lightTheme.color}; width: 22px;
          height: 22px;
          margin: 2px;
          border-radius: 50%;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          line-height: 1;
          cursor: pointer;
        }
        .custom-caption { color: #94A6BE; font-size: 10px; display: flex; justify-content: space-between;}
        `
      }
    </style>
     <DayPicker locale={ru} mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
      classNames={ClassNames} />
    </>
  );
}

export default Calendar;
