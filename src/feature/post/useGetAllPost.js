import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "../../services/ApiPost";
export const useGetAllPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allPost"],
    queryFn: getAllPost,
  });

  return { data, isLoading };
};
