import { BaseMeta } from "./BaseMeta";
import { Meta } from "./Meta";

class Step extends BaseMeta {
  constructor(
    title: string,
    description: string,
    finishDate: Date | null,
    goalDate: Date | null,
    public meta: Meta
  ) {
    super(title, description, finishDate, goalDate);
  }
}

export { Step };
