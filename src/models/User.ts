import { Realm } from "@realm/react";

export class User extends Realm.Object {
  id: Realm.BSON.ObjectId;
  nickname: string;
  createdAt: Date;

  constructor(nickname: string) {
    super();
    this.id = new Realm.BSON.ObjectId();
    this.nickname = nickname;
    this.createdAt = new Date();
  }

  static schema = {
    name: "User",
    primaryKey: "id",
    properties: {
      id: "objectId",
      nickname: "string",
      createdAt: "date",
    },
  };
}
