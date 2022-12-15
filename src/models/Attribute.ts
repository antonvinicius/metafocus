import { Entity } from "./Entity";

class Attribute extends Entity {
  static total = 100;

  constructor(public title: string, public icon: string) {
    super();
  }
}

export { Attribute };
