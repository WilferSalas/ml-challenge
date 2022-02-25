// @packages
import axios from "axios";
import { useQuery } from "react-query";

const devClient = "https://ml-challenge-api-v3.vercel.app/api";

export const useFetchSearchProducts = (searchTerm: string | null) => {
  return useQuery(["products", searchTerm], () =>
    axios(`${devClient}/items?q=${searchTerm}`).then((res) => res.data)
  );
};

export const useFetchProduct = (id: string | undefined) => {
  return useQuery(["product", id], () =>
    axios(`${devClient}/items/${id}`).then((res) => res.data)
  );
};
