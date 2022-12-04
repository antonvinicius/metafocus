import Bald1 from "../../assets/avatars/bald1.png";
import Bald2 from "../../assets/avatars/bald2.png";
import Boy from "../../assets/avatars/boy.png";
import LongHair from "../../assets/avatars/long-hair.png";
import LongHaired from "../../assets/avatars/long-haired.png";
import Man1 from "../../assets/avatars/man1.png";
import Man2 from "../../assets/avatars/man2.png";
import PonyTail from "../../assets/avatars/ponytail.png";
import ShortHair from "../../assets/avatars/short-hair.png";
import Woman1 from "../../assets/avatars/woman1.png";
import Woman2 from "../../assets/avatars/woman2.png";
import Worker from "../../assets/avatars/worker.png";

type AvatarProps = {
  source: any;
  key: string;
};

export const avatars: AvatarProps[] = [
  {
    key: "bald1",
    source: Bald1,
  },
  {
    key: "bald2",
    source: Bald2,
  },
  {
    key: "boy",
    source: Boy,
  },
  {
    key: "long-hair",
    source: LongHair,
  },
  {
    key: "long-haired",
    source: LongHaired,
  },
  {
    key: "man1",
    source: Man1,
  },
  {
    key: "man2",
    source: Man2,
  },
  {
    key: "ponytail",
    source: PonyTail,
  },
  {
    key: "short-hair",
    source: ShortHair,
  },
  {
    key: "woman1",
    source: Woman1,
  },
  {
    key: "woman2",
    source: Woman2,
  },
  {
    key: "worker",
    source: Worker,
  },
];

export function findByKey(key: string): AvatarProps {
  const avatar = avatars.find((a) => a.key === key);
  if (avatar) return avatar;
  else throw new Error("Invalid avatar key");
}
