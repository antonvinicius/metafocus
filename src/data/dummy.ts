import { Attribute } from "../models/Attribute";
import { Category } from "../models/Category";
import { Meta } from "../models/Meta";
import { Step } from "../models/Step";
import { User } from "../models/User";
import { UserAttribute } from "../models/UserAttribute";

const dummyAttributes: Attribute[] = [
  new Attribute("Correr", "gift"),
  new Attribute("Pular", "gift"),
  new Attribute("Levantar Peso", "gift"),
  new Attribute("Resistência", "gift"),
  new Attribute("Emocional", "gift"),
  new Attribute("Mental", "gift"),
  new Attribute("Foco", "gift"),
  new Attribute("Disciplina", "gift"),
  new Attribute("Sabedoria", "gift"),
  new Attribute("Conhecimento", "gift"),
];

export const dummyUserAttributes: UserAttribute[] = [
  new UserAttribute(dummyAttributes[0]),
  new UserAttribute(dummyAttributes[1]),
  new UserAttribute(dummyAttributes[2]),
  new UserAttribute(dummyAttributes[3]),
  new UserAttribute(dummyAttributes[4]),
  new UserAttribute(dummyAttributes[5]),
  new UserAttribute(dummyAttributes[6]),
  new UserAttribute(dummyAttributes[7]),
  new UserAttribute(dummyAttributes[8]),
  new UserAttribute(dummyAttributes[9]),
];

const dummyCategories: Category[] = [
  new Category("Força", "red", [
    dummyAttributes[0],
    dummyAttributes[1],
    dummyAttributes[3],
    dummyAttributes[4],
  ]),
  new Category("Saúde", "red", [dummyAttributes[4], dummyAttributes[5]]),
  new Category("Inteligência", "red", [
    dummyAttributes[6],
    dummyAttributes[7],
    dummyAttributes[8],
    dummyAttributes[9],
  ]),
];

const dummyMetas: Meta[] = [
  new Meta(
    "Ir para a academia durante 1 semana",
    "Exercitar-se durante 5 dias",
    new Date(),
    [
      new Step("Dia 1", "primeiro dia", new Date()),
      new Step("Dia 2", "segundo dia", new Date()),
      new Step("Dia 3", "terceiro dia", new Date()),
      new Step("Dia 4", "quarto dia", new Date()),
      new Step("Dia 5", "quinto dia", new Date()),
    ],
    [dummyCategories[0]]
  ),
  new Meta(
    "Ler livros",
    "Ler 3 livros",
    new Date(),
    [
      new Step("Livro 1", "Harry Potter", new Date()),
      new Step("Livro 2", "Maze Runner", new Date()),
      new Step("Livro 2", "Senhor dos anéis", new Date()),
    ],
    [dummyCategories[1], dummyCategories[2]]
  ),
];

const dummyUser = new User("vinicius", "bald2");

dummyUser.metas = dummyMetas;

export { dummyUser };
