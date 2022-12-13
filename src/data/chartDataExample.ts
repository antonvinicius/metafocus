import { theme } from "../global/theme";
import { Category } from "../models/Category";
import uuid from "react-native-uuid";
import { Attribute } from "../models/Attribute";
import { Item } from "react-native-multi-selectbox-typescript";

export const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Rainy Days"], // optional
};

// each value represents a goal ring in Progress chart
export const progressRingData = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8],
};

export const chartConfig = {
  color: (opacity = 1) => theme.colors.primary,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const defaultCategories: Category[] = [
  {
    id: uuid.v4() as string,
    attributes: [new Attribute("Forte", "strong")],
    color: "red",
    title: "Saúde",
  },
  {
    id: uuid.v4() as string,
    attributes: [new Attribute("Forte", "strong")],
    color: "red",
    title: "Inteligência",
  },
  {
    id: uuid.v4() as string,
    attributes: [new Attribute("Forte", "strong")],
    color: "red",
    title: "Perspicácia",
  },
];

export const selectExampleData: Item[] = defaultCategories.map((c) => ({
  id: c.id,
  item: c.title,
}));
