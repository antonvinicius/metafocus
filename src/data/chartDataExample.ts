import { theme } from "../global/theme";
import { User } from "../models/User";

export function getLineChartData(user: User) {
  const metas = user.metas;
  const metasYear = metas.filter(
    (m) => m.createdAt.getFullYear() === new Date().getFullYear()
  );

  const metasJan = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 0
  ).length;
  const metasFev = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 1
  ).length;
  const metasMar = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 2
  ).length;
  const metasAbr = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 3
  ).length;
  const metasMai = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 4
  ).length;
  const metasJun = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 5
  ).length;
  const metasJul = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 6
  ).length;
  const metasAgo = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 7
  ).length;
  const metasSet = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 8
  ).length;
  const metasOut = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 9
  ).length;
  const metasNov = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 10
  ).length;
  const metasDez = metasYear.filter(
    (m) => m.finishDate?.getMonth() === 11
  ).length;

  const metasCriadasJan = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 0
  ).length;
  const metasCriadasFev = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 1
  ).length;
  const metasCriadasMar = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 2
  ).length;
  const metasCriadasAbr = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 3
  ).length;
  const metasCriadasMai = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 4
  ).length;
  const metasCriadasJun = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 5
  ).length;
  const metasCriadasJul = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 6
  ).length;
  const metasCriadasAgo = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 7
  ).length;
  const metasCriadasSet = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 8
  ).length;
  const metasCriadasOut = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 9
  ).length;

  const metasCriadasNov = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 10
  ).length;
  const metasCriadasDez = metasYear.filter(
    (m) => m.createdAt?.getMonth() === 11
  ).length;

  const lineChartData = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: [
          metasJan,
          metasFev,
          metasMar,
          metasAbr,
          metasMai,
          metasJun,
          metasJul,
          metasAgo,
          metasSet,
          metasOut,
          metasNov,
          metasDez,
        ],
        strokeWidth: 2, // optional
        color: () => "#e4fa52",
      },
      {
        data: [
          metasCriadasJan,
          metasCriadasFev,
          metasCriadasMar,
          metasCriadasAbr,
          metasCriadasMai,
          metasCriadasJun,
          metasCriadasJul,
          metasCriadasAgo,
          metasCriadasSet,
          metasCriadasOut,
          metasCriadasNov,
          metasCriadasDez,
        ],
        strokeWidth: 2, // optional
        color: () => "#72a7fc",
      },
    ],
    legend: ["Metas concluídas", "Metas criadas"], // optional
  };

  return lineChartData;
}

export function getProgressChartData(user: User) {
  const userAttributes = user.attributes;
  const labels = userAttributes.map((a) => a.attribute.title);
  const data = userAttributes.map((a) => a.current / 100);

  const progressRingData = {
    labels: labels, // optional
    data: data,
  };

  return progressRingData;
}

export const ringChartConfig = {
  backgroundColor: "#000000",
  backgroundGradientFrom: "#000",
  backgroundGradientTo: "#0d0d0d",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

export const chartConfig = {
  color: (opacity = 1) => theme.colors.primary,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
