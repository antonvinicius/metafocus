import { BaseMeta } from "./BaseMeta";
import { Meta } from "./Meta";

class Step {
  constructor(
    public title: string,
    public description: string,
    public goalDate: Date | null
  ) {}
}

export { Step };
