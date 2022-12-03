import { BaseMeta } from "./BaseMeta";
import { Category } from "./Category";
import { Step } from "./Step";

class Meta extends BaseMeta {
  constructor(
    title: string,
    description: string,
    finishDate: Date | null,
    goalDate: Date | null,
    public steps: Step[],
    public categories: Category[]
  ) {
    super(title, description, finishDate, goalDate);
  }
}

export { Meta };
