import { defineStore } from "pinia";
import { api } from "src/boot/axios";

const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
});

export default function useProducts() {
  const productStore = useProductStore();
  const fetchProducts = async () => {
    const fetch = await api.get("https://jsonplaceholder.typicode.com/todos/1");
    productStore.products = fetch.data;
  };

  return {
    store: productStore,
    fetchProducts,
  };
}
