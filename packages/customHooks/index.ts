import { useState, useEffect } from "react";
import { fetchPhotographers } from "@letshang/api";
import { Photographers } from "@letshang/types";
export const photographersState = () => {
  const [photographers, setPhotographers] = useState<Photographers[]>();
  const fetchPhotographer = async () => {
    fetchPhotographers().then((result) => {
      setPhotographers(result);
    });
  };
  useEffect(() => {
    fetchPhotographer();
  }, []);
  return { photographers };
};
