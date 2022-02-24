// @packages
import axios from "axios";
import { useQuery } from "react-query";

const devClient = "http://localhost:3001/api";

export const useFetchProduct = (id: string | undefined) => {
  return useQuery("Search results", () =>
    axios(`${devClient}/items/${id}`).then((res) => res.data)
  );
};
