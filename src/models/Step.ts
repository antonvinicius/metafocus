import { BaseMeta } from "./BaseMeta";
import { Meta } from "./Meta";

class Step extends BaseMeta {
  constructor(
    title: string,
    description: string,
    goalDate: Date | null,
    public meta: Meta
  ) {
    super(title, description, goalDate);
  }
}

export { Step };
