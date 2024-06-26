'use client'
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var customHooks_exports = {};
__export(customHooks_exports, {
  photographersState: () => photographersState
});
module.exports = __toCommonJS(customHooks_exports);
var import_react = require("react");

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
  const [photographers, setPhotographers] = (0, import_react.useState)();
  const fetchPhotographer = async () => {
    fetchPhotographers().then((result) => {
      setPhotographers(result);
    });
  };
  (0, import_react.useEffect)(() => {
    fetchPhotographer();
  }, []);
  return { photographers };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  photographersState
});
