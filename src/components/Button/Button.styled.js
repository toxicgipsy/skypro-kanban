import styled from "styled-components";

const padding = {
  small: {
    padding: "5px 10px",
    color: "black",
  },
  medium: {
    padding: "15px 40px",
    color: "orange",
  },
};

export const Button = styled.button`
  background-color: ${(props) => (props.$testprops ? "yellow" : "#4caf50")};
  color: white;
  padding: ${(props) => padding[props.$size]?.padding || padding.small.padding}
    10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const DangerButton = styled(Button)`
  background-color: red;
`;
