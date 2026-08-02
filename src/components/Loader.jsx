import { columnStatus, taskLoader } from "../data";
import { SColumnTitle, SColumnTitlP, SMainColumn } from "./Column.styled";
import {
  LoaderContainer,
  LoaderContent,
  MainBlockLoader,
  SLoaderWrapper,
} from "./Loader.styled";
import SkeletonCard from "./SkeletonCard";

const Loader = () => {
  return (
    <SLoaderWrapper>
      <LoaderContainer>
        <MainBlockLoader>
          <LoaderContent>
            {columnStatus.map((status) => {
              const filterSkeleton = taskLoader.filter(
                (item) => item.status === status,
              );

              return (
                <SMainColumn key={status}>
                  <SColumnTitle>
                    <SColumnTitlP>{status}</SColumnTitlP>
                  </SColumnTitle>
                  {filterSkeleton.map((item, index) => (
                    <SkeletonCard key={item._id} delay={index * 120} />
                  ))}
                </SMainColumn>
              );
            })}
          </LoaderContent>
        </MainBlockLoader>
      </LoaderContainer>
    </SLoaderWrapper>
  );
};

export default Loader;
