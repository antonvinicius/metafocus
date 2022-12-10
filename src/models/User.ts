import { defaultUserAttributes } from "../data/userAttributesRepository";
import { Entity } from "./Entity";
import { UserAttribute } from "./UserAttribute";

class User extends Entity {
  public attributes: UserAttribute[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.attributes = defaultUserAttributes;
  }
}

export { User };
