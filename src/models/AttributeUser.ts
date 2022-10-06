import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
export class AttributeUser extends Realm.Object {
  id!: string;
  level!: number;
  current!: number;
  user_id!: string;

  static generate(level: number, current: number, user_id: string) {
    return {
      id: v4(),
      level,
      current,
      user_id,
    };
  }

  static schema = {
    name: "AttributeUser",
    primaryKey: "id",
    properties: {
      id: "string",
      level: "string",
      current: "string",
      user_id: "string",
    },
  };
}
