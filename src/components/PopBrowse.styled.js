import styled from "styled-components";

export const SPopBrowseWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

    &:target {
    display: block;
  }
`;

export const SPopBrowseContainer = styled.div`
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

export const SPopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const SPopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const SPopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SPopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const SCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: #ffe4c2;
  color: #ff6d00;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
`;

export const SCategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: inherit;
`;

export const SThemeTop = styled.div`
  display: block;

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const SStatus = styled.div`
  margin-bottom: 11px;
`;

export const SStatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SStatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;

export const SStatusThemeP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const SPopBrowseWrapForm = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const SPopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const SPopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SSubttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const SFormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
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
`

export const SCategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const SPopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  .btn-group button {
    margin-right: 8px;
  }
`

export const SPopBrowseBtnEdit = styled.div`
  display: ${({$hide}) => ($hide ? "none" : "flex")};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

    .btn-group button {
    margin-right: 8px;
  }
`

export const SBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  &:hover {
  background-color: #33399b;
  color: #ffffff;
}
`

export const SBtnBorA = styled.a`
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover a {
  color: #ffffff;
  }
`


export const SBtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  &:hover {
  background-color: #33399b;
  }
`
