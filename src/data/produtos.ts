interface produto {
  titulo: string;
  categoria: string;
  ref: number;
  imagem: string;
}

const listaProduto: produto[] = [
  {
    titulo: "Contra Filé",
    categoria: "Bovinos",
    ref: 1235,
    imagem: "carne.png",
  },
  {
    titulo: "Acem",
    categoria: "Bovinos",
    ref: 1245,
    imagem: "placeholder.png",
  },
  {
    titulo: "Franguinho",
    categoria: "Aves",
    ref: 256,
    imagem: "frango.png",
  },
  {
    titulo: "Pescado",
    categoria: "Peixes",
    ref: 1125,
    imagem: "peixe.png",
  },
  {
    titulo: "Carninha",
    categoria: "Bovinos",
    ref: 235,
    imagem: "carne.png",
  },
  {
    titulo: "Contra Filé",
    categoria: "Bovinos",
    ref: 15,
    imagem: "placeholder.png",
  },
  {
    titulo: "Peito",
    categoria: "Aves",
    ref: 122,
    imagem: "frango.png",
  },
];

export default listaProduto;
