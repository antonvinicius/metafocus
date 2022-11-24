import "react-native-get-random-values";
import {Realm} from "@realm/react";
import {v4} from "uuid";

export class Attribute extends Realm.Object {
    id!: string;
    name!: string;
    icon!: string;
    total!: number;
    level!: number;
    current!: number;

    static generate(name: string, icon: string, total: number) {
        return {
            id: v4(),
            name,
            icon,
            total,
        };
    }

    static schema = {
        name: "Attribute",
        primaryKey: "id",
        properties: {
            id: "string",
            name: "string",
            icon: "string",
            total: "int",
            level: "int",
            current: "int",
        },
    };
}