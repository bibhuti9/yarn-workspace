import React from "react";
import { PropsTypes } from "./types";
import Card from "./Card/index.web";

export default function Container({ photographers }: PropsTypes) {
  return (
    <div>
      {photographers?.map((item) => (
        <Card key={String(item.id)} photographers={item} />
      ))}
    </div>
  );
}
