import styled from "styled-components";

export const SMainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const SColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const SColumnTitlP = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;
