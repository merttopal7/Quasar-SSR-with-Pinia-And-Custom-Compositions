import { defineStore } from "pinia";
import { api } from "src/boot/axios";

const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: false,
    user: {},
    username: null,
    password: null,
  }),
});

export default function useProducts() {
  const AuthStore = useAuthStore();
  const login = async () => {
    console.log("Username", AuthStore.username);
    console.log("Password", AuthStore.password);
    //const fetch = await api.get("https://jsonplaceholder.typicode.com/todos/1");
    //productStore.products = fetch.data;
  };

  return {
    store: AuthStore,
    login,
  };
}
