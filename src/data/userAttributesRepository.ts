import { Attribute } from "../models/Attribute";
import { UserAttribute } from "../models/UserAttribute";

export const defaultUserAttributes = [
  new UserAttribute(new Attribute("Força", "strenght")),
  new UserAttribute(new Attribute("Destreza", "strenght")),
  new UserAttribute(new Attribute("Inteligência", "strenght")),
  new UserAttribute(new Attribute("Sorte", "strenght")),
  new UserAttribute(new Attribute("Saúde", "strenght")),
  new UserAttribute(new Attribute("Perspicácia", "strenght")),
  new UserAttribute(new Attribute("Força", "strenght")),
];
