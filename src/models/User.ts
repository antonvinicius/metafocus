import { dummyUserAttributes } from "../data/dummy";
import { Entity } from "./Entity";
import { Meta } from "./Meta";
import { UserAttribute } from "./UserAttribute";

class User extends Entity {
  public attributes: UserAttribute[];
  public metas: Meta[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.attributes = dummyUserAttributes;
    this.metas = [];
  }
}

export { User };
