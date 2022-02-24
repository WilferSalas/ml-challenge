// @packages
import axios from "axios";
import { useQuery } from "react-query";

const devClient = "http://localhost:3001/api";

export const useFetchSearchProducts = (searchTerm: string | null) => {
  return useQuery("products", () =>
    axios(`${devClient}/items?q=${searchTerm}`).then((res) => res.data)
  );
};

export const useFetchProduct = (id: string | undefined) => {
  return useQuery("product", () =>
    axios(`${devClient}/items/${id}`).then((res) => res.data)
  );
};
