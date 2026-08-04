import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
from {
    opacity: 0;
    transform: translateY(8px)
} to {
    opacity: 1;
    transform: translateY(0)
}`;

const shimmer = keyframes`
from {
    background-position:200% 0
} to {
    background-position: -200% 0;
}
`;

const skeletonLine = css`
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.skeletonBase} 25%, ${theme.colors.skeletonHighlight} 50%, ${theme.colors.skeletonBase} 75%)`};
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s linear infinite;
`;

export const SkeletonCardWrapper = styled.div`
  width: 100%;
  padding: 5px;

  @media screen and (max-width: 1200px) {
    width: 230px;
    flex: 0 0 230px;
  }
`;

export const SkeletonCardItem = styled.div`
  width: 220px;
  height: 130px;
  padding: 15px 13px 19px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  opacity: 0;
  animation: ${appear} 350ms ease forwards;
  animation-delay: ${({ $delay = 0 }) => `${$delay}ms`};
`;

export const SkeletonGroup = styled.div`
  width: 100%;

  &:first-of-type {
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
  }

  &:last-of-type {
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  &:first-of-type:after {
    content: "";
    width: 16px;
    height: 4px;
    margin-top: 8px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.skeletonAccent};
  }
`;

export const SkeletonTheme = styled.div`
  ${skeletonLine};
  width: 77px;
  height: 20px;
  border-radius: 18px;
`;

export const SkeletonTitle = styled.p`
  ${skeletonLine};
  width: 106px;
  height: 12px;
  margin: 0;
`;

export const SkeletonDescription = styled.div`
  ${skeletonLine};
  width: 76px;
  height: 12px;
`;

export const SkeletonDate = styled.div`
  ${skeletonLine};
  width: 54px;
  height: 12px;
`;
