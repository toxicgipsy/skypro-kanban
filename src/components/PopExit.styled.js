import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPopExitWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const SPopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:  ${({ theme }) => theme.colors.overlay};
`;

export const SPopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color:  ${({ theme }) => theme.colors.surface};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid  ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const SPopExitTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color:  ${({ theme }) => theme.colors.text};
`;

export const SPopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const SPopExitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color:  ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  &:hover {
    background-color:  ${({ theme }) => theme.colors.primaryHover};
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SPopExitYesA = styled(Link)`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SPopExitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid  ${({ theme }) => theme.colors.primary};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color:  ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color:  ${({ theme }) => theme.colors.primaryHover};
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

export const SPopExitNoA = styled(Link)`
  width: 100%;
  height: 100%;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;
