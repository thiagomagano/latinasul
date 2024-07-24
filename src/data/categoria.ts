import iconBovino from "@assets/svg/categorias/bovinos.svg";
import iconFrango from "@assets/svg/categorias/aves.svg";
import iconOvino from "@assets/svg/categorias/cordeiros.svg";
import iconSuino from "@assets/svg/categorias/suinos.svg";
import iconPeixe from "@assets/svg/categorias/peixes.svg";
import iconVegetais from "@assets/svg/categorias/vegetais.svg";
import iconLaticinios from "@assets/svg/categorias/lacteos.svg";
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
    titulo: "Suinos",
    icon: iconSuino,
  },
  {
    titulo: "Industrializados",
    icon: iconIndustrializados,
  },
  {
    titulo: "Aves",
    icon: iconFrango,
  },
  {
    titulo: "Peixes",
    icon: iconPeixe,
  },
  {
    titulo: "Queijos",
    icon: iconLaticinios,
  },
  {
    titulo: "Vegetais",
    icon: iconVegetais,
  },
];

export default listaCategoria;
