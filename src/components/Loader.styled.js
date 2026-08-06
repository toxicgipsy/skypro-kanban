import styled from "styled-components";

export const SLoaderWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.page};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlockLoader = styled.div`
  width: 100%;
  padding: 25px 0 49px;
`;

export const LoaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    display: block;

    & > div {
      width: 100%;
    }
  }
`;
