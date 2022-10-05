import { createRealmContext } from "@realm/react";
import { User } from "../models/User";

const config: Realm.Configuration = {
  schema: [User], // Models vai aqui
  schemaVersion: 3,
};

export const realmContext = createRealmContext(config);
