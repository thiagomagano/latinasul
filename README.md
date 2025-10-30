# Latina Sul — Site Institucional

Projeto do site institucional da distribuidora Latina Sul, desenvolvido com Astro 4, Tailwind CSS (com DaisyUI), animações com Motion e integração com PocketBase e envio de e-mails via Resend (SMTP).

## Tecnologias
- **Astro 4** (SSG/SSR) com adapter **Netlify** (`output: server`)
- **Tailwind CSS** + **DaisyUI** (design system e temas)
- **Motion** (animações in-view no frontend)
- **PocketBase** (catálogo de produtos e imagens)
- **Resend (SMTP)** via **Nodemailer** (envio de e-mails de contato)
- **TypeScript**

## Scripts
```bash
pnpm dev       # ambiente de desenvolvimento
pnpm build     # build de produção (SSR para Netlify)
pnpm preview   # pré-visualizar build local
```

## Estrutura principal
- `src/pages/`
  - `index.astro`: Home (hero, vantagens, vitrine de produtos e regiões)
  - `produtos.astro`: Página de listagem de categorias com seção por categoria
  - `produtos/[categoria].astro`: Página dinâmica por categoria, consulta produtos no PocketBase
  - `contato.astro`: Formulário de contato (POST para `/actions/send-email`)
  - `quemsomos.astro`: Página institucional com vídeo, missão, visão e valores
  - `actions/send-email.ts`: Action server-side que envia e-mail via Resend
- `src/components/`
  - Cartões e seções reutilizáveis (`CardCategoria`, `CardProduto`, `sections/*`)
- `src/layouts/Layout.astro`
  - Layout base (Navbar, Footer, fontes, animações globais)
- `src/data/`
  - `categoria.ts`, `vantagens.ts`: dados estáticos utilizados em seções/listagens
  - `produtos.ts`: mock de produtos (apoio visual)
- `src/lib/`
  - `pocketbase.ts`: cliente PocketBase configurado com `PUBLIC_PB_API`
  - `utils/getImageFromPB.js`: utilitário para compor URLs de arquivos do PocketBase
  - `utils/email.ts`: função `sendEmail` usando Nodemailer com SMTP da Resend
- `public/` e `dist/`
  - Imagens, SVGs e assets estáticos

## Páginas e fluxo
- **Home**: apresenta a marca, vantagens e destaques de produtos.
- **Produtos**: lista todas as categorias (exceto um filtro específico para exibir) e renderiza blocos por categoria.
- **Produtos por categoria** (`/produtos/:categoria`):
  - Busca produtos no PocketBase: `categoria.titulo = ":categoria"`.
  - Para "Bovinos" há tratamento especial: separa itens por referência (gancho/caixaria) e exibe parceiros.
  - Exibe mapas ilustrativos e marcas parceiras quando aplicável.
- **Quem Somos**: conteúdo institucional + vídeo hospedado (S3) + missão/visão/valores.
- **Contato**: formulário com POST para `actions/send-email.ts`, que envia e-mail e redireciona para `/sucesso`.

## Integrações
- **PocketBase**
  - URL base definida em `PUBLIC_PB_API`.
  - Consulta via `pb.collection("produtos").getFullList(...)` com `expand: "categoria"`.
  - Utilitário `getImageFromPB(collection, id, fileName, thumb?)` para montar URLs de imagens.
- **Envio de e-mail (Resend + Nodemailer)**
  - `src/lib/utils/email.ts` cria transporter SMTP para `smtp.resend.com`.
  - Campos usados: `RESEND_API_KEY` (auth), `SEND_EMAIL_FROM` (remetente), `to` fixo em `send-email.ts`.

## Variáveis de ambiente
Crie um arquivo `.env` na raiz com:
```bash
# PocketBase
PUBLIC_PB_API="https://seu-pocketbase.tld"

# Resend SMTP (envio de e-mails)
RESEND_API_KEY="re_..."
SEND_EMAIL_FROM="Site Latina Sul <no-reply@seudominio.tld>"
```

- `PUBLIC_PB_API`: URL do PocketBase (ex.: `https://pb.seudominio.tld`).
- `RESEND_API_KEY`: chave de API da Resend (SMTP).
- `SEND_EMAIL_FROM`: endereço de remetente exibido no e-mail enviado pelo site.

## Desenvolvimento local
1. Pré-requisitos: Node 18+, pnpm.
2. Instale dependências:
   ```bash
   pnpm install
   ```
3. Configure `.env` conforme acima.
4. Rode o projeto:
   ```bash
   pnpm dev
   ```
5. Acesse `http://localhost:4321`.

## Build e Deploy
- O projeto usa `@astrojs/netlify` com `output: "server"` em `astro.config.mjs`.
- Para gerar o build local:
  ```bash
  pnpm build && pnpm preview
  ```
- Para publicar na Netlify:
  - Configure as variáveis de ambiente (`PUBLIC_PB_API`, `RESEND_API_KEY`, `SEND_EMAIL_FROM`) no painel.
  - Defina comando de build: `pnpm build`.
  - Defina diretório de publicação: `.netlify/functions-internal` (SSR) é gerenciado automaticamente pelo adapter; use as configurações padrão do adapter Netlify para Astro SSR.

## Convenções de assets
- Imagens e SVGs públicos ficam em `public/assets/**`.
- Ícones e vetores por categoria em `public/assets/svg/categorias/`.
- Mapas ilustrativos em `public/assets/svg/mapas/`.
- Imagens de produtos e parceiros em `public/assets/produtos/**`.

## Notas de implementação
- O SSR está habilitado (necessário para consultas dinâmicas ao PocketBase em rotas por categoria).
- Animações de entrada são aplicadas globalmente no `Layout.astro` usando `motion` quando os elementos entram em viewport.
- O formulário de contato usa action API (`actions/send-email.ts`) com `prerender = false` e redireciona para `/sucesso` após envio.

## Licença
Projeto proprietário da Latina Sul Distribuidora. Todos os direitos reservados.
