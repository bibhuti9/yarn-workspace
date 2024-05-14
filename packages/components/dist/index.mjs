'use client'

// Container/index.tsx
import React2 from "react";
import { FlatList } from "react-native";

// Container/Card/index.tsx
import { View, Image } from "react-native";
import React from "react";
function Card({ photographers }) {
  return /* @__PURE__ */ React.createElement(View, { style: { width: 100, height: 100, borderWidth: 1 } }, /* @__PURE__ */ React.createElement(
    Image,
    {
      source: { uri: photographers?.src?.original },
      style: { width: 100, height: 100 }
    }
  ));
}

// Container/index.tsx
function Container({ photographers }) {
  return /* @__PURE__ */ React2.createElement(
    FlatList,
    {
      data: photographers,
      keyExtractor: (item) => String(item.id),
      renderItem: ({ item }) => /* @__PURE__ */ React2.createElement(Card, { photographers: item })
    }
  );
}
export {
  Container
};
