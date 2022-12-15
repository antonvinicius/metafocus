export const MetaSchema = {
  name: "MetaSchema",
  properties: {
    id: "string",
    title: "string",
    description: "string",
    goalDate: "date",
    createdAt: "date",
    finished: "bool",
    finishDate: "date",
    steps: "StepSchema[]",
    categories: "CategorySchema[]",
  },
  primaryKey: "id",
};
