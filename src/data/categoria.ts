import iconBovino from "@assets/svg/categorias/bovinos.svg";
import iconFrango from "@assets/svg/categorias/aves.svg";
import iconOvino from "@assets/svg/categorias/cordeiros.svg";
import iconSuino from "@assets/svg/categorias/suínos.svg";
import iconPeixe from "@assets/svg/categorias/peixes.svg";
import iconVegetais from "@assets/svg/categorias/vegetais.svg";
import iconQueijos from "@assets/svg/categorias/queijos.svg";
import iconIndustrializados from "@assets/svg/categorias/industrializados.svg";

interface categoria {
  titulo: string;
  icon: ImageMetadata;
}

const listaCategoria: categoria[] = [
  {
    titulo: "Bovinos",
    icon: iconBovino,
  },
  {
    titulo: "Cordeiros",
    icon: iconOvino,
  },
  {
    titulo: "Suínos",
    icon: iconSuino,
  },
  {
    titulo: "Aves",
    icon: iconFrango,
  },
  {
    titulo: "Industrializados",
    icon: iconIndustrializados,
  },
  {
    titulo: "Peixes",
    icon: iconPeixe,
  },
  {
    titulo: "Queijos",
    icon: iconQueijos,
  },
  {
    titulo: "Vegetais",
    icon: iconVegetais,
  },
];

export default listaCategoria;
