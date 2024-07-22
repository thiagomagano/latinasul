import iconBovino from "@assets/svg/bovino.svg";
import iconFrango from "@assets/svg/frango.svg";
import iconOvino from "@assets/svg/ovino.svg";
import iconSuino from "@assets/svg/suino.svg";
import iconPeixe from "@assets/svg/peixe.svg";
import iconVegetais from "@assets/svg/vegetais.svg";
import iconLaticinios from "@assets/svg/laticinios.svg";

interface produtos {
  title: string;
  iconUrl: ImageMetadata;
}

const listaProdutos: produtos[] = [
  {
    title: "Bovinos",
    iconUrl: iconBovino,
  },
  {
    title: "Cordeiros",
    iconUrl: iconOvino,
  },
  {
    title: "Suinos",
    iconUrl: iconSuino,
  },
  {
    title: "Industrializados",
    iconUrl: iconFrango,
  },
  {
    title: "Aves",
    iconUrl: iconFrango,
  },
  {
    title: "Peixes",
    iconUrl: iconPeixe,
  },
  {
    title: "Queijos",
    iconUrl: iconLaticinios,
  },
  {
    title: "Vegetais",
    iconUrl: iconVegetais,
  },
];

export default listaProdutos;
