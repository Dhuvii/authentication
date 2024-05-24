import { useQuery } from "@tanstack/react-query";
import fetcher from "../../utilities/fetcher";

const useGetLogs = () => {
  return useQuery({
    queryKey: ["use-get-logs"],
    queryFn: async () => {
      const { data } = await fetcher().get("/auth/logs");
      return data.data;
    },
    retry: 1,
  });
};

export default useGetLogs;
