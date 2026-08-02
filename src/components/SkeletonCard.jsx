import {
  SkeletonCardItem,
  SkeletonCardWrapper,
  SkeletonDate,
  SkeletonDescription,
  SkeletonGroup,
  SkeletonTheme,
  SkeletonTitle,
} from "./SkeletonCard.styled";

function SkeletonCard({ delay }) {
  return (
    <SkeletonCardWrapper>
      <SkeletonCardItem $delay={delay}>
        <SkeletonGroup>
          <SkeletonTheme></SkeletonTheme>
        </SkeletonGroup>
        <SkeletonGroup>
          <SkeletonTitle></SkeletonTitle>
          <SkeletonDescription></SkeletonDescription>
          <SkeletonDate></SkeletonDate>
        </SkeletonGroup>
      </SkeletonCardItem>
    </SkeletonCardWrapper>
  );
}

export default SkeletonCard;
