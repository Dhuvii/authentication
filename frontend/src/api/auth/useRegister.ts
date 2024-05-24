import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "../../hooks/useLocalStorage";
import { registerInput } from "../../schema/Register.Schema";
import fetcher from "../../utilities/fetcher";

const useRegister = () => {
  const { setStorage } = useLocalStorage();
  return useMutation({
    mutationKey: ["use-register"],
    mutationFn: async (credentials: registerInput) => {
      const { data } = await fetcher().post("/auth/register", credentials);
      const user = data?.data || null;
      if (user) {
        setStorage("token", user.token);
      }
      return data.data;
    },
  });
};

export default useRegister;
