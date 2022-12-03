import { Attribute } from "./Attribute";
import { Entity } from "./Entity";

class User extends Entity {
  public attributes: Attribute[];

  constructor(public nickname: string, public avatar: string) {
    super();
    this.attributes = [
      new Attribute("Força", "strenght"),
      new Attribute("Destreza", "strenght"),
      new Attribute("Inteligência", "strenght"),
      new Attribute("Sorte", "strenght"),
      new Attribute("Saúde", "strenght"),
      new Attribute("Perspicácia", "strenght"),
      new Attribute("Força", "strenght"),
    ];
  }
}

export { User };
