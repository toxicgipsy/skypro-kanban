import styled from "styled-components";
import { Hover01, Hover03 } from "../../style/common.style";

export const PopBrowse = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`;

export const PopBrowseContainer = styled.div`
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

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backgroundBlock};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid ${(props) => props.theme.borderBlock};
    position: relative;
`;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
    color: ${(props) => props.theme.color};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const CategoriesThemeThemeTopActiveCategory = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1 !important;
    background-color: ${props => props.$background}
`;

export const CategoriesThemeP = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${props => props.$color}
`;

export const PopBrowseStatusStatus = styled.div`
    margin-bottom: 11px;
`;

export const StatusPSubttl = styled.p`
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
`;

export const StatusPSubttl2 = styled.p`
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    margin-left: 22px;
`;

export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94a6be;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;

    &.grey {
        background-color: #94A6BE;
       }

    &:hover {
        cursor: ${props => props.$editPage ? "pointer" : "default"};
    }
`;

export const StatusThemeP = styled.p`
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    &.grey {
        color: white;
       }
`;

export const PopBrowseWrap = styled.div`
    display: block;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopBrowseWrap2 = styled.div`
    display: block;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subttl = styled.label`
    color: ${(props) => props.theme.color};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: ${(props) => props.theme.backgroundBlock};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
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

export const PopBrowseBtnBrowse = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 8px;
`;

export const BtnBar = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${(props) => props.theme.HeaderUserColor});
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.HeaderUserColor};
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;

    ${Hover03}
`;

export const BtnBor = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${(props) => props.theme.HeaderUserColor});
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.HeaderUserColor};
    padding: 0 14px;
    height: 30px;
    margin-right: 8px;
    margin-bottom: 10px;

    ${Hover03}
`;

export const BtnBg = styled.button`
    border-radius: 4px;
    background: #565eef;
    border: none;
    outline: none;
    color: #ffffff;
    padding: 0 14px;
    height: 30px;
    margin-right: 8px;

    ${Hover01}
`;

export const PopBrowseBtnEdit = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 8px;
`;

export const BtnGroup = styled.div`
 & button {
    margin-right: 8px;
 }
`;