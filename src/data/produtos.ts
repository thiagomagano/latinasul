interface Produto {
  title: string;
  description: string;
  imageUrl: string;
}

export const produtos: Array<Produto> = [
  {
    title: "Carne",
    description:
      "Cortes de carne bovina de alta qualidade, para todos os gostos.",
    imageUrl: "carne.png",
  },
  {
    title: "Frango",
    description: "Pedaços de frango selecionados, ideais para suas receitas.",
    imageUrl: "frango.png",
  },
  {
    title: "Peixe",
    description: "Variedade de peixes congelados, práticos e saborosos.",
    imageUrl: "peixe.png",
  },
];
