import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
export class User extends Realm.Object {
  id!: string;
  nickname!: string;
  avatar!: string;
  createdAt!: Date;

  static generate(nickname: string, avatar: string) {
    return {
      id: v4(),
      nickname,
      avatar,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "User",
    primaryKey: "id",
    properties: {
      id: "string",
      nickname: "string",
      avatar: "string",
      createdAt: "date",
    },
  };
}
