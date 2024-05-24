import { create } from "zustand";
import fetcher from "../utilities/fetcher";

export type User = {
  id: string;
  name: string;
  email: string;
  last_logged_in: string;
};

interface UserState {
  user: User | null;
  fetchUserLoading: boolean;
  getUser: () => Promise<User | null>;

  setUser: (user: User | null) => void;
  setFetchUserLoading: (value: boolean) => void;
}

const useAuthStore = create<UserState>()((set) => ({
  user: null,
  fetchUserLoading: true,
  setUser: (user) => {
    set((state) => ({
      ...state,
      user: user,
    }));
  },

  getUser: async () => {
    return new Promise(async (res, _) => {
      try {
        const { data: user } = await fetcher().get("/auth/whoami");
        const validUser = user?.data || null;

        set((state) => ({
          ...state,
          user: validUser,
        }));

        res(validUser);
      } catch (error) {
        console.log({ error });
        res(null);
      }
    });
  },

  setFetchUserLoading: (value) => {
    set((state) => ({
      ...state,
      fetchUserLoading: value,
    }));
  },
}));

export default useAuthStore;
