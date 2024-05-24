import { useMutation } from "@tanstack/react-query";
import fetcher from "../../utilities/fetcher";
import { loginInput } from "../../schema/Login.Schema";
import useLocalStorage from "../../hooks/useLocalStorage";

const useLogin = () => {
  const { setStorage } = useLocalStorage();
  return useMutation({
    mutationKey: ["use-login"],
    mutationFn: async (credentials: loginInput) => {
      const { data } = await fetcher().post("/auth/login", credentials);
      const user = data?.data || null;
      if (user) {
        setStorage("token", user.token);
      }
      return data.data;
    },
  });
};

export default useLogin;
