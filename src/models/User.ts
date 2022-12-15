import { getRealm } from "../realm/MetafocusDatabase";
import { Attribute } from "./Attribute";
import { Entity } from "./Entity";
import { Meta } from "./Meta";
import { UserAttribute } from "./UserAttribute";

class User extends Entity {
  public attributes: UserAttribute[];
  public metas: Meta[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.metas = [];
    this.attributes = [];
    this.setDefaultAttributes();
  }

  async setDefaultAttributes() {
    const realm = await getRealm();
    const defaultAttributes = realm.objects("AttributeSchema");

    this.attributes = [
      new UserAttribute(defaultAttributes[0] as unknown as Attribute),
      new UserAttribute(defaultAttributes[1] as unknown as Attribute),
      new UserAttribute(defaultAttributes[2] as unknown as Attribute),
      new UserAttribute(defaultAttributes[3] as unknown as Attribute),
      new UserAttribute(defaultAttributes[4] as unknown as Attribute),
      new UserAttribute(defaultAttributes[5] as unknown as Attribute),
      new UserAttribute(defaultAttributes[6] as unknown as Attribute),
      new UserAttribute(defaultAttributes[7] as unknown as Attribute),
      new UserAttribute(defaultAttributes[8] as unknown as Attribute),
      new UserAttribute(defaultAttributes[9] as unknown as Attribute),
    ];
  }
}

export { User };
