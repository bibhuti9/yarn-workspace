'use client'

// services/index.ts
var fetchPhotographers = async () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/").then((res) => res.json()).then((result) => {
      console.log("----->", result);
      resolve(result);
    }).catch(() => resolve([]));
  });
};
export {
  fetchPhotographers
};
