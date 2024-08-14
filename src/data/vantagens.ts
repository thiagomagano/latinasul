import iconCaminhao from "@assets/svg/vantagens/icon-caminhao.svg";
import iconMarcas from "@assets/svg/vantagens/icon-marcas.svg";
import iconCaixa from "@assets/svg/vantagens/icon-caixa.svg";
import iconFolha from "@assets/svg/vantagens/icon-folha.svg";

interface cardVantagemProps {
  iconUrl: ImageMetadata;
  description: string;
}

const listaVantagens: cardVantagemProps[] = [
  {
    iconUrl: iconCaminhao,
    description: "Entregamos seu pedido com frota própria",
  },
  {
    iconUrl: iconMarcas,
    description: "Trabalhamos com as melhores marcas",
  },
  {
    iconUrl: iconCaixa,
    description: "Possuímos um espaço amplo para armazenamento",
  },
  {
    iconUrl: iconFolha,
    description: "Contribuímos para a preservação do meio ambiente",
  },
];

export default listaVantagens;
