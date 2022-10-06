import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
import { Attribute } from "./Attribute";
export class Category extends Realm.Object {
  id!: string;
  color!: string;
  name!: string;
  attributes!: Realm.List<Attribute>;

  static generate(color: string, name: string) {
    return {
      id: v4(),
      color,
      name,
    };
  }

  static schema = {
    name: "Category",
    primaryKey: "id",
    properties: {
      id: "string",
      color: "string",
      name: "string",
      attributes: "Attribute[]",
    },
  };
}
