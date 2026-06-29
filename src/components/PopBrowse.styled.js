import styled from "styled-components";

export const SPopBrowseWrapper = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
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
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
`;

export const SCategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const SThemeTop = styled.div`
  display: block;
`;

export const SThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const SPopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SStatusP = styled.p`
  margin-bottom: 14px;
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

// .subttl {
//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// }

// ._hide {
//   display: none;
// }

// .status {
//   margin-bottom: 11px;
// }

export const SPopBrowseWrapForm = styled.div`
  display: block;
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
`

export const SCategoriesP = styled.p`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
`
.categories__theme {

}

.categories__themes {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.categories__theme p {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
}


// .pop-browse__btn-browse,
// .pop-browse__btn-edit {
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// }
// .pop-browse__btn-browse button,
// .pop-browse__btn-edit button {
//   height: 30px;
//   margin-bottom: 10px;
//   padding: 0 14px;
// }
// .pop-browse__btn-browse .btn-group button,
// .pop-browse__btn-edit .btn-group button {
//   margin-right: 8px;
// }

// .pop-user-set:target,
// .pop-exit:target,
// .pop-new-card:target,
// .pop-browse:target {
//   display: block;
// }

// @media screen and (max-width: 660px) {
//   .pop-new-card {
//     top: 70px;
//   }
//   .pop-new-card__container {
//     padding: 0;
//     justify-content: flex-start;
//   }
//   .pop-new-card__block {
//     border-radius: 0;
//   }
//   .pop-new-card__wrap {
//     display: block;
//   }

//   .pop-browse {
//     top: 70px;
//   }
//   .pop-browse__container {
//     padding: 0;
//     justify-content: flex-start;
//   }
//   .pop-browse__block {
//     border-radius: 0;
//   }
//   .pop-browse__wrap {
//     display: block;
//   }
// }

// @media screen and (max-width: 495px) {
//   .container {
//     width: 100%;
//     padding: 0 16px;
//   }
//   .header__btn-main-new {
//     z-index: 3;
//     position: fixed;
//     left: 16px;
//     bottom: 30px;
//     top: auto;
//     width: calc(100vw - 32px);
//     height: 40px;
//     border-radius: 4px;
//     margin-right: 0;
//   }
//   .pop-new-card__container {
//     padding: 0;
//     justify-content: flex-start;
//   }
//   .pop-new-card__block {
//     padding: 20px 16px 32px;
//   }
//   .pop-new-card__form {
//     max-width: 100%;
//     width: 100%;
//     display: block;
//   }
//   .pop-new-card__calendar {
//     width: 100%;
//   }
//   .form-new__area {
//     max-width: 100%;
//     height: 34px;
//   }
//   .form-new__create {
//     width: 100%;
//     height: 40px;
//   }
//   .pop-browse__block {
//     padding: 20px 16px 32px;
//   }
//   .pop-browse__content .theme-down {
//     display: block;
//     margin-bottom: 20px;
//   }
//   .pop-browse__content .theme-top {
//     display: none;
//   }
//   .pop-browse__form {
//     max-width: 100%;
//   }
//   .pop-browse__calendar {
//     width: 100%;
//   }
//   .pop-browse__btn-browse button,
//   .pop-browse__btn-edit button {
//     width: 100%;
//     height: 40px;
//   }
//   .pop-browse__btn-browse .btn-group,
//   .pop-browse__btn-edit .btn-group {
//     width: 100%;
//   }
//   .pop-browse__btn-browse .btn-group button,
//   .pop-browse__btn-edit .btn-group button {
//     margin-right: 0px;
//   }
//   .form-browse__area {
//     max-width: 100%;
//   }
//   .form-browse__area {
//     height: 37px;
//   }
// }


// .pop-browse__content .categories__theme {
//   opacity: 1;
// }
// .pop-browse__content .theme-down {
//   display: none;
//   margin-bottom: 20px;
// }
// .pop-browse__content .theme-top {
//   display: block;
// }

// const themeStyles = {
//   _orange: {
//     background: "#ffe4c2",
//     color: "#ff6d00",
//   },

//   _green: {
//     background: "#b4fdd1",
//     color: "#06b16e",
//   },

//   _purple: {
//     background: "#e9d4ff",
//     color: "#9a48f1",
//   },

//   _gray: {
//     background: "#94a6be",
//     color: "#ffffff",
//   },
// };
