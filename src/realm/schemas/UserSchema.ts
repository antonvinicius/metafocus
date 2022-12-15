export const UserSchema = {
  name: "UserSchema",
  properties: {
    id: "string",
    nickname: "string",
    avatar: "string",
    attributes: "AttributeSchema[]",
    metas: "MetaSchema[]",
  },
  primaryKey: "id",
};
