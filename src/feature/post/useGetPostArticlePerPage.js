import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getPostArticlePerPage } from "../../services/ApiPost";
export const useGetPostArticlePerPage = (category) => {
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["articlePost"],
    queryFn: ({ pageParam = 0 }) =>
      getPostArticlePerPage({ pageParam, category }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 6) {
        return allPages.length;
      }
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
