import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeef6;
  text-align: center;
`;

export const NotFoundImage = styled.img`
  display: block;
  width: 100%;
  max-width: 592px;
  height: auto;
  margin: 0 auto 24px;
`;

export const NotFoundTitle = styled.h1`
  margin: 0 0 24px;
  color: #000;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
`;

export const HomeLink = styled(Link)`
  min-width: 190px;
  height: 40px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #565eef;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: background-color 150ms ease;

  &:hover {
    background-color: #33399b;
  }

  &:focus-visible {
    outline: 2px solid #33399b;
    outline-offset: 3px;
  }
`;
