'use client'

// index.ts
import { useState, useEffect } from "react";

// ../api/services/index.ts
var fetchPhotographers = async () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/").then((res) => res.json()).then((result) => {
      console.log("----->", result);
      resolve(result);
    }).catch(() => resolve([]));
  });
};

// index.ts
var photographersState = () => {
  const [photographers, setPhotographers] = useState();
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
export {
  photographersState
};
