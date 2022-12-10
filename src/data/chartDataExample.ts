import { theme } from "../global/theme";

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

export const selectExampleData = [
  {
    item: "Juventus",
    id: "JUVE",
  },
  {
    item: "Real Madrid",
    id: "RM",
  },
  {
    item: "Barcelona",
    id: "BR",
  },
  {
    item: "PSG",
    id: "PSG",
  },
  {
    item: "FC Bayern Munich",
    id: "FBM",
  },
  {
    item: "Manchester United FC",
    id: "MUN",
  },
  {
    item: "Manchester City FC",
    id: "MCI",
  },
  {
    item: "Everton FC",
    id: "EVE",
  },
  {
    item: "Tottenham Hotspur FC",
    id: "TOT",
  },
  {
    item: "Chelsea FC",
    id: "CHE",
  },
  {
    item: "Liverpool FC",
    id: "LIV",
  },
  {
    item: "Arsenal FC",
    id: "ARS",
  },

  {
    item: "Leicester City FC",
    id: "LEI",
  },
];
