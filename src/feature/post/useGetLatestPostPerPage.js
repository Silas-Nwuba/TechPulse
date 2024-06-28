import { useInfiniteQuery } from "@tanstack/react-query";
import { getLatestPostPerPage } from "../../services/ApiPost";
import { useLocation } from "react-router-dom";

export const useGetLatestPostPerPage = () => {
  const location = useLocation();
  console.log(location);
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["post"],
    queryFn: getLatestPostPerPage,
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.length === 4) return allPage.length + 1;
      return undefined;
    },
  });
  return {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
  };
};
