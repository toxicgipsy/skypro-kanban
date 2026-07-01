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

export function Calendar() {
  return (
    <CalendarWrapper>
      <SPopNewCardCalendar>
        <SCalendarTtl>Даты</SCalendarTtl>
        <SCalendarBlock>
          <SCalendarNav>
            <SCalendarMonth>Сентябрь 2023</SCalendarMonth>
            <SNavActions>
              <SNavAction data-action="prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </SNavAction>
              <SNavAction data-action="next">
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
              <SCalendarCell $otherMonth>28</SCalendarCell>
              <SCalendarCell $otherMonth>29</SCalendarCell>
              <SCalendarCell $otherMonth>30</SCalendarCell>
              <SCalendarCell $cellDay>31</SCalendarCell>
              <SCalendarCell $cellDay>1</SCalendarCell>
              <SCalendarCell $cellDay>2</SCalendarCell>
              <SCalendarCell $cellDay>3</SCalendarCell>
              <SCalendarCell $cellDay>4</SCalendarCell>
              <SCalendarCell $cellDay>5</SCalendarCell>
              <SCalendarCell $cellDay>6</SCalendarCell>
              <SCalendarCell $cellDay>7</SCalendarCell>
              <SCalendarCell $cellDay $current>
                8
              </SCalendarCell>
              <SCalendarCell $cellDay>9</SCalendarCell>
              <SCalendarCell $cellDay>10</SCalendarCell>
              <SCalendarCell $cellDay>11</SCalendarCell>
              <SCalendarCell $cellDay>12</SCalendarCell>
              <SCalendarCell $cellDay>13</SCalendarCell>
              <SCalendarCell $cellDay>14</SCalendarCell>
              <SCalendarCell $cellDay>15</SCalendarCell>
              <SCalendarCell $cellDay>16</SCalendarCell>
              <SCalendarCell $cellDay>17</SCalendarCell>
              <SCalendarCell $cellDay>18</SCalendarCell>
              <SCalendarCell $cellDay>19</SCalendarCell>
              <SCalendarCell $cellDay>20</SCalendarCell>
              <SCalendarCell $cellDay>21</SCalendarCell>
              <SCalendarCell $cellDay>22</SCalendarCell>
              <SCalendarCell $cellDay>23</SCalendarCell>
              <SCalendarCell $cellDay>24</SCalendarCell>
              <SCalendarCell $cellDay>25</SCalendarCell>
              <SCalendarCell $cellDay>26</SCalendarCell>
              <SCalendarCell $cellDay>27</SCalendarCell>
              <SCalendarCell $cellDay>28</SCalendarCell>
              <SCalendarCell $cellDay>29</SCalendarCell>
              <SCalendarCell $cellDay>30</SCalendarCell>
              <SCalendarCell $otherMonth>1</SCalendarCell>
            </SCalendarCells>
          </SCalendarContent>

          <input type="hidden" id="datepick_value" defaultValue="08.09.2023" />
          <SCalendarPeriod>
            <SCalendarP>
              Выберите срок исполнения <SDateControl></SDateControl>.
            </SCalendarP>
          </SCalendarPeriod>
        </SCalendarBlock>
      </SPopNewCardCalendar>
    </CalendarWrapper>
  );
}

export default Calendar;
