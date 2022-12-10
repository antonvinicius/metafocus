import { Attribute } from "./Attribute";
import { Entity } from "./Entity";
import { UserAttribute } from "./UserAttribute";

class User extends Entity {
  public attributes: UserAttribute[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.attributes = [
      new UserAttribute(new Attribute("Força", "strenght")),
      new UserAttribute(new Attribute("Destreza", "strenght")),
      new UserAttribute(new Attribute("Inteligência", "strenght")),
      new UserAttribute(new Attribute("Sorte", "strenght")),
      new UserAttribute(new Attribute("Saúde", "strenght")),
      new UserAttribute(new Attribute("Perspicácia", "strenght")),
      new UserAttribute(new Attribute("Força", "strenght")),
    ];
  }
}

export { User };
