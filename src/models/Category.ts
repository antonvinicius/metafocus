import { Attribute } from "./Attribute";
import { Entity } from "./Entity";

class Category extends Entity {
  constructor(
    public title: string,
    public color: string,
    public attributes: Attribute[]
  ) {
    super();
  }
}

export { Category };
