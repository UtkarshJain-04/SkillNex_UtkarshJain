import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (userData, token) =>
        set((state) => ({
          user: userData,
          token: token,
        })),

      logout: () =>
        set((state) => ({
          user: null,
          token: null,
        })),
      refresh: (updatedUser) =>
        set((state) => ({
          user: updatedUser,
        })),
    }),

    { name: "loginStorage", storage: createJSONStorage(() => sessionStorage) },
  ),
);

export default useAuthStore;
