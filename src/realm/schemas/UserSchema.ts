export const UserSchema = {
  name: "UserSchema",
  properties: {
    id: "string",
    nickname: "string",
    avatar: "string",
    attributes: "UserAttributeSchema[]",
    metas: "MetaSchema[]",
  },
  primaryKey: "id",
};
