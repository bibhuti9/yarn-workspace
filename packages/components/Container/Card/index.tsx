import { View, Image } from "react-native";
import React from "react";
import { Photographers } from "@letshang/types";
interface PropsTypes {
  photographers: Photographers;
}
export default function Card({ photographers }: PropsTypes) {
  return (
    <View style={{ flex: 1, borderWidth: 1 }}>
      <Image
        source={{ uri: photographers?.src?.original }}
        style={{ flex: 1, height: 200 }}
      />
    </View>
  );
}
