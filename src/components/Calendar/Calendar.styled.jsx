import styled from "styled-components";
import { darkTheme, lightTheme } from "../../lib/theme.js";

export const StyledDayPicker = styled.div`
  .rdp {
    --rdp-caption-font-size: 14px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    margin-top: -8px;
  }
  .custom-head {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }
  .custom-day {
    color: #94a6be;
    font-size: 12px;
    line-height: 1;
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
  }
  .custom-day_selected {
    background-color: #94a6be;
    color: ${(props) => (props.theme ? darkTheme.color : lightTheme.color)};
    width: 22px;
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
  .custom-caption {
    color: #94a6be;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Footer = styled.p`
  color: #94a6be;
  font-size: 12px;
  margin-top: 18px;
`;
