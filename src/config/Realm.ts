import { createRealmContext } from "@realm/react";
import { Attribute } from "../models/Attribute";
import { AttributeUser } from "../models/AttributeUser";
import { Category } from "../models/Category";
import { Meta } from "../models/Meta";
import { User } from "../models/User";

const config: Realm.Configuration = {
  schema: [User, Meta, Attribute, AttributeUser, Category], // Models vai aqui
  schemaVersion: 5,
};

export const realmContext = createRealmContext(config);
