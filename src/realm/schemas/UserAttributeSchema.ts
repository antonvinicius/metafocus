export const UserAttributeSchema = {
  name: "UserAttributeSchema",
  properties: {
    id: "string",
    level: "int",
    current: "number",
    attribute: "AttributeSchema",
  },
  primaryKey: "id",
};
