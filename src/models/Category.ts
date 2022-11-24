import "react-native-get-random-values";
import {Realm} from "@realm/react";
import {v4} from "uuid";
import {Attribute} from "./Attribute";

export class Category extends Realm.Object {
    id!: string;
    title!: string;
    color!: string;
    attributes!: Realm.List<Attribute>;

    static generate(name: string, color: string) {
        return {
            id: v4(),
            name,
            color,
        };
    }

    static schema = {
        name: "Category",
        primaryKey: "id",
        properties: {
            id: "string",
            name: "string",
            color: "string",
            attributes: "Attribute[]",
        },
    };
}