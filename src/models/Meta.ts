import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
export class Meta extends Realm.Object {
  id!: string;
  description!: string;
  title!: string;
  status!: boolean;
  createdAt!: Date;

  static generate(description: string, title: string, status: boolean) {
    return {
      id: v4(),
      description,
      title,
      status,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Meta",
    primaryKey: "id",
    properties: {
      id: "string",
      description: "string",
      title: "string",
      status: false,
      createdAt: "date",
    },
  };
}
