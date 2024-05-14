import React from "react";
import { Photographers } from "@letshang/types";
interface PropsTypes {
  photographers: Photographers;
}
export default function Card({ photographers }: PropsTypes) {
  return (
    <div>
      <img src={photographers?.url} style={{ width: 100, height: 100 }} />
    </div>
  );
}
