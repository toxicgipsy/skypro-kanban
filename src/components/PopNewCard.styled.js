import styled from "styled-components";

const themeStyles = {
  _orange: {
    background: "#ffe4c2",
    color: "#ff6d00",
  },

  _green: {
    background: "#b4fdd1",
    color: "#06b16e",
  },

  _purple: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },

  _gray: {
    background: "#94a6be",
    color: "#ffffff",
  },
};

export const SPopNewCard = styled.div`
  display: none;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const SPopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const SPopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SPopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const SPopNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const SPopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SPopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SFormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SSubttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SFormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const SFormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const SCategories = styled.div`
  margin-bottom: 20px;
`;

export const SCategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  cursor: pointer;

  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.background || themeStyles._gray.background};

  color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.color || themeStyles._gray.color};
`;

export const SCategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: inherit;
`;

export const SFormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
