import styled from "styled-components";
import { Hover01 } from "../../style/common.style";

export const PopNewCard = styled.div`
    display: block;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
`;

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backgroundBlock};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid ${(props) => props.theme.borderBlock};
    position: relative;
`;

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopNewCardTtl = styled.h3`
    color: ${(props) => props.theme.color};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const PopNewCardClose = styled.div`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;

    &:hover {
        color: red;
      }
`;

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopNewCardFormFormNew = styled.div`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subttl = styled.label`
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const FormNewInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    background-color: ${props => props.$errorTitle ? (props) => props.theme.errorBg : ""};
    border: ${props => props.$errorTitle ? "0.7px solid red" : "0.7px solid rgba(148, 166, 190, 0.4)"};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;
    color: ${(props) => props.theme.color};

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

export const FormNewArea = styled.textarea`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    background-color: ${props => props.$errorDescription ? (props) => props.theme.errorBg : ""};
    border: ${props => props.$errorDescription ? "0.7px solid red" : "0.7px solid rgba(148, 166, 190, 0.4)"};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    color: ${(props) => props.theme.color};

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

export const Categories = styled.div`
    margin-bottom: 20px;
`;

export const CategoriesPSubttl = styled.p`
    margin-bottom: 14px;
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const CategoriesPSubttl2 = styled.p`
    margin-bottom: 14px;
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-left: 22px;
`;

export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const CategoriesThemeOrange = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: #ffe4c2;
    color: "#ff6d00";
`;

export const CategoriesThemeGreen = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: #b4fdd1;
    color: "#06b16e";
`;

export const CategoriesThemePurple = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    background-color: #e9d4ff;
    color: #9a48f1;
`;

export const Orange = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: #ff6d00;
`;

export const Green = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: #06b16e;
`;

export const Purple = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: #9a48f1;
`;

export const FormNewCreate = styled.button`
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

    ${Hover01}
`;

export const LabelOrange = styled.label`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 10px 20px;
    border-radius: 24px;
    margin-right: 7px;
    background-color: ${(props) => props.theme.backgroundOrange};
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) => props.theme.colorOrange};
    opacity: ${(props) => props.$opacity === "Web Design" ? "1" : "0.5"};
    cursor: pointer;
`;

export const LabelGreen = styled.label`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 10px 20px;
    border-radius: 24px;
    margin-right: 7px;
    background-color: ${(props) => props.theme.backgroundGreen};
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) => props.theme.colorGreen};
    opacity: ${(props) => props.$opacity === "Research" ? "1" : "0.5"};
    cursor: pointer;
`;

export const LabelPurple = styled.label`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 10px 20px;
    border-radius: 24px;
    margin-right: 7px;
    background-color: ${(props) => props.theme.backgroundPurple};
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) => props.theme.colorPurple};
    opacity: ${(props) => props.$opacity === "Copywriting" ? "1" : "0.5"};
    cursor: pointer;
`;

export const ModalInputRadio = styled.input`
    display:none;
`;