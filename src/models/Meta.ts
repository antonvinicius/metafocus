import "react-native-get-random-values";
import { Realm } from "@realm/react";
import { v4 } from "uuid";
import { Category } from "../interfaces/Category";
export class Meta extends Realm.Object {
  id!: string;
  title!: string;
  description!: string;
  status!: number;
  categories!: Category[];
  createdAt!: Date;

  static generate(title: string, description: string, status: number, categories: Category[]) {
    return {
      id: v4(),
      title,
      description,
      status,
      categories,
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
      status: "number",
      categories: "data",
      createdAt: "date",
    },
  };
}
