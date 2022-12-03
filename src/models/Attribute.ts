import { Entity } from "./Entity";

class Attribute extends Entity {
  static total = 100;
  public level: number;
  public current: number;

  constructor(public title: string, public icon: string) {
    super();
    this.level = 1;
    this.current = 0;
  }
}

export { Attribute };
