import { Realm } from "@realm/react";
import { v4 } from "uuid";
export class Entity extends Realm.Object {
    id!: string;

    static generate(){
        return{
            id: v4()
        };
    }
}