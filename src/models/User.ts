import { defaultUserAttributes } from "../data/userAttributesRepository";
import { Entity } from "./Entity";
import { Meta } from "./Meta";
import { UserAttribute } from "./UserAttribute";

class User extends Entity {
  public attributes: UserAttribute[];
  public metas: Meta[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.attributes = defaultUserAttributes;
    this.metas = [];
  }
}

export { User };
