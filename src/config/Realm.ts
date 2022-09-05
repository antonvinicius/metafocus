import { createRealmContext } from "@realm/react";

const config: Realm.Configuration = {
  schema: [], // Models vai aqui
};

export const realmContext = createRealmContext(config);
