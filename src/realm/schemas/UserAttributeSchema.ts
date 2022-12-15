export const UserAttributeSchema = {
  name: "UserAttributeSchema",
  properties: {
    id: "string",
    level: "int",
    current: "int",
    attribute: "AttributeSchema",
  },
  primaryKey: "id",
};
