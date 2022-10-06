import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
import { AttributeUser } from "../interfaces/AttributeUser";
export class Attribute extends Realm.Object {
  id!: string;
  color!: string;
  icon!: string;
  name!: string;
  total!: number;
  attribute_user!: Realm.List<AttributeUser>;

  static generate(color: string, icon: string, name: string, total: number) {
    return {
      id: v4(),
      color,
      icon,
      name,
      total,
    };
  }

  static schema = {
    name: "Attribute",
    primaryKey: "id",
    properties: {
      id: "string",
      color: "string",
      icon: "string",
      name: "string",
      total: "int",
      attribute_user: "AttributeUser[]",
    },
  };
}
