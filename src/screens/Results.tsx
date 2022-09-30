import { Box, Text } from "native-base";
import React from "react";
import { Attribute as AttributeComponent } from "../components/Attribute";
import { Attribute } from "../interfaces/Attribute";
import { data } from "../server/categories.json";

export function Results() {
  const attributes: Attribute[] = [];
  data.forEach((item) => {
    item.attributes.forEach((att) => {
      attributes.push({
        color: att.color,
        attribute_user: att.attribute_user,
        icon: att.icon,
        name: att.name,
        total: att.total,
      });
    });
  });

  return (
    <Box flex="1" justifyContent="center" alignItems="center">
      {attributes.map((item) => (
        <AttributeComponent key={Math.random().toString()} attribute={item} />
      ))}
    </Box>
  );
}
