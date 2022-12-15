import { Attribute } from "./Attribute";
import { Entity } from "./Entity";

class UserAttribute extends Entity {
  public level: number;
  public current: number;
  public attribute: Attribute;

  constructor(attribute: Attribute) {
    super();
    this.level = 1;
    this.current = 0;
    this.attribute = attribute;
  }

  levelUp() {
    if (this.current >= Attribute.total) {
      this.current = 0;
      this.level++;
    } else {
      this.current++;
    }
  }
}

export { UserAttribute };
