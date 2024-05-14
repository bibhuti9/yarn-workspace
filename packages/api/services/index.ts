import { Photographers } from "@letshang/types";
import Axios from "axios";
export const fetchPhotographers = async (): Promise<Photographers[]> => {
  return new Promise((resolve, reject) => {
    Axios.get("https://yarn-workspace-backend.vercel.app/").then((result) =>
      resolve(result?.data)
    );
  });
};
