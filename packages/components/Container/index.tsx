import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
import { PropsTypes } from "./types";

export function Container({ photographers }: PropsTypes) {
  return (
    <FlatList
      numColumns={2}
      data={photographers}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Card photographers={item} />}
    />
  );
}
