import { v4 as uuid } from "uuid";

abstract class Entity {
  id: string;

  constructor() {
    this.id = uuid();
  }
}

export { Entity };
