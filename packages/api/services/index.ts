import { Photographers } from "@letshang/types";
import Axios from "axios";
export const fetchPhotographers = async (): Promise<Photographers[]> => {
  const result = await Axios.get("https://fc51-49-36-83-214.ngrok-free.app");
  console.log(JSON.stringify(result.data, null, 2));
  return new Promise((resolve, reject) => {
    fetch("")
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch(() => resolve([]));
  });
};
