import uuid from "react-native-uuid";
import Realm from "realm";

abstract class Entity {
  id: string;

  constructor() {
    this.id = uuid.v4() as string;
  }
}

export { Entity };
