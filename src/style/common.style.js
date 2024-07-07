import styled, { css } from "styled-components";

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover,
  .header__user:hover {
    color: #33399b;
  }

  &hover::after,
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: 1px solid #33399b;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
