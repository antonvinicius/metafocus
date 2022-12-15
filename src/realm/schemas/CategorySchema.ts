export const CategorySchema = {
  name: "CategorySchema",
  properties: {
    id: "string",
    title: "string",
    color: "string",
    attributes: "AttributeSchema[]",
  },
  primaryKey: "id",
};
