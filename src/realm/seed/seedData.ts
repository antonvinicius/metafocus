import { getRealm } from "../MetafocusDatabase";

export async function seed() {
  const realm = await getRealm();
  const categories = realm.objects("CategorySchema");

  if (categories.length === 0) {
    realm.write(() => {
      realm.create("CategorySchema", {
        id: "forca",
        title: "Força",
        color: "red",
        attributes: [
          {
            id: "correr",
            title: "Correr",
            icon: "gift",
          },
          {
            id: "pular",
            title: "Pular",
            icon: "gift",
          },
          {
            id: "levantar-peso",
            title: "Levantar Peso",
            icon: "gift",
          },
          {
            id: "resistencia",
            title: "Resistência",
            icon: "gift",
          },
        ],
      });

      realm.create("CategorySchema", {
        id: "saude",
        title: "Saúde",
        color: "red",
        attributes: [
          {
            id: "emocional",
            title: "Emocional",
            icon: "gift",
          },
          {
            id: "mental",
            title: "Mental",
            icon: "gift",
          },
        ],
      });

      realm.create("CategorySchema", {
        id: "inteligencia",
        title: "Inteligencia",
        color: "red",
        attributes: [
          {
            id: "foco",
            title: "Foco",
            icon: "gift",
          },
          {
            id: "disciplina",
            title: "Disciplina",
            icon: "gift",
          },
          {
            id: "sabedoria",
            title: "Sabedoria",
            icon: "gift",
          },
          {
            id: "conhecimento",
            title: "Conhecimento",
            icon: "gift",
          },
        ],
      });
    });

    console.log("Data seeded");
  }
}
