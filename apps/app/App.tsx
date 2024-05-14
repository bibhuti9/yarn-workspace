import { View } from "react-native";
import React from "react";
import { photographersState } from "@letshang/customHooks";
import { Container } from "@letshang/components";
export default function App() {
  const { photographers } = photographersState();

  return (
    <View style={{ flex: 1 }}>
      <Container photographers={photographers} />
    </View>
  );
}
