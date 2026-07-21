import { useMemo, useState } from "react";
import {
  CalendarWrapper,
  SCalendarBlock,
  SCalendarCell,
  SCalendarCells,
  SCalendarContent,
  SCalendarDayName,
  SCalendarDaysNames,
  SCalendarMonth,
  SCalendarNav,
  SCalendarP,
  SCalendarPeriod,
  SCalendarTtl,
  SDateControl,
  SNavAction,
  SNavActions,
  SPopNewCardCalendar,
} from "./Calendar.styled";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function parseCalendarDate(value) {
  if (!value) return null;

  const [day, month, shortYear] = value.split(".").map(Number);
  const year = shortYear < 100 ? 2000 + shortYear : shortYear;
  const date = new Date(year, month - 1, day);

  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  return isValid ? date : null;
}

function formatCalendarDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${day}.${month}.${year}`;
}

function createCalendarDays(year, month) {
  const firstWeekDay = (new Date(year, month, 1).getDay() + 6) % 7;

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(year, month, index - firstWeekDay + 1);
    const otherMonth = date.getMonth() !== month;

    return {
      key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      day: date.getDate(),
      date: otherMonth ? null : formatCalendarDate(date),
      otherMonth,
    };
  });
}

function Calendar({ selectedDate, onDateChange }) {
  const [visibleDate, setVisbleDate] = useState(() => {
    const selected = parseCalendarDate(selectedDate);
    const initailDate = selected || new Date();

    return new Date(initailDate.getFullYear(), initailDate.getMonth(), 1);
  });

  const year = visibleDate.getFullYear();
  const month = visibleDate.getMonth();

  const calendarDays = useMemo(
    () => createCalendarDays(year, month),
    [year, month],
  );

  const handlePreviousMonth = () => {
    setVisbleDate(
      (current) => new Date(current.getFullYear(), current.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setVisbleDate(
      (current) => new Date(current.getFullYear(), current.getMonth() + 1),
    );
  };

  return (
    <CalendarWrapper>
      <SPopNewCardCalendar>
        <SCalendarTtl>Даты</SCalendarTtl>
        <SCalendarBlock>
          <SCalendarNav>
            <SCalendarMonth>
              {MONTHS[month]} {year}
            </SCalendarMonth>
            <SNavActions>
              <SNavAction data-action="prev" onClick={handlePreviousMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </SNavAction>
              <SNavAction data-action="next" onClick={handleNextMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </SNavAction>
            </SNavActions>
          </SCalendarNav>
          <SCalendarContent>
            <SCalendarDaysNames>
              <SCalendarDayName>пн</SCalendarDayName>
              <SCalendarDayName>вт</SCalendarDayName>
              <SCalendarDayName>ср</SCalendarDayName>
              <SCalendarDayName>чт</SCalendarDayName>
              <SCalendarDayName>пт</SCalendarDayName>
              <SCalendarDayName>сб</SCalendarDayName>
              <SCalendarDayName>вс</SCalendarDayName>
            </SCalendarDaysNames>
            <SCalendarCells>
              {calendarDays.map((item) => (
                <SCalendarCell
                  key={item.key}
                  $otherMonth={item.otherMonth}
                  $cellDay={!item.otherMonth}
                  $current={selectedDate === item.date}
                  onClick={() => {
                    if (item.date) {
                      onDateChange?.(item.date);
                    }
                  }}
                >
                  {item.day}
                </SCalendarCell>
              ))}
            </SCalendarCells>
          </SCalendarContent>

          <SCalendarPeriod>
            <SCalendarP>
              Выберите срок исполнения{" "}
              <SDateControl>{selectedDate}</SDateControl>.
            </SCalendarP>
          </SCalendarPeriod>
        </SCalendarBlock>
      </SPopNewCardCalendar>
    </CalendarWrapper>
  );
}

export default Calendar;
