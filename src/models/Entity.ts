import uuid from "react-native-uuid";

abstract class Entity {
  id: string;

  constructor() {
    this.id = uuid.v4() as string;
  }
}

export { Entity };
