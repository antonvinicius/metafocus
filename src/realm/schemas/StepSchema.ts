export const StepSchema = {
  name: "StepSchema",
  properties: {
    id: "string",
    title: "string",
    description: "string",
    goalDate: "date?",
    createdAt: "date",
    finished: "bool",
    finishDate: "date?",
  },
  primaryKey: "id",
};
