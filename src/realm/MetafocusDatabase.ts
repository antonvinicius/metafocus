import Realm from "realm";
import { AttributeSchema } from "./schemas/AttributeSchema";
import { CategorySchema } from "./schemas/CategorySchema";
import { MetaSchema } from "./schemas/MetaSchema";
import { StepSchema } from "./schemas/StepSchema";
import { UserAttributeSchema } from "./schemas/UserAttributeSchema";
import { UserSchema } from "./schemas/UserSchema";

export async function getRealm(): Promise<Realm> {
  const realm = await Realm.open({
    schema: [
      AttributeSchema,
      CategorySchema,
      MetaSchema,
      StepSchema,
      UserAttributeSchema,
      UserSchema,
    ],
  });

  return realm;
}
