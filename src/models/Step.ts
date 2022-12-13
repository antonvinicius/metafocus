import { BaseMeta } from "./BaseMeta";

class Step extends BaseMeta {
  constructor(
    public title: string,
    public description: string,
    public goalDate: Date | null
  ) {
    super(title, description, goalDate);
  }
}

export { Step };
