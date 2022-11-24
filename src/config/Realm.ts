import { createRealmContext } from "@realm/react";
import { Attribute } from "../models/Attribute";
import { Category } from "../models/Category";
import { Meta } from "../models/Meta";
import { User } from "../models/User";

const config: Realm.Configuration = {
  schema: [User, Meta, Attribute, Category], // Models vai aqui
  schemaVersion: 6,
};

export const realmContext = createRealmContext(config);
