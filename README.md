# MONTE CIVETTA

Monte Civetta Gelateria’s website shares business information, flavors, photos, and links for ordering and social media.

Visitors can view the gelateria’s opening hours and browse a gallery and a page listing 55 flavors. The site provides navigation to products, location, delivery, and contact information, along with links to iFood, Instagram, and Linktree. It is built with TanStack Start and TypeScript.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://monte-civetta.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0e0cb60a-2498-5035-987f-4316b27b5f2c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

## Hospedagem por FTP — montecivettagelateria.com.br

O repositório contém o código-fonte, não um site que o Apache possa abrir diretamente. Para essa hospedagem, gere as sete páginas HTML, os arquivos CSS/JavaScript e as fotos:

```sh
npm install
npm run build:ftp
```

Envie **todo o conteúdo de `dist/ftp/`**, incluindo o arquivo oculto `.htaccess` e a pasta `__l5e` com as fotos, para a pasta pública do domínio indicada pelo painel da hospedagem (normalmente `public_html` ou `www`). O arquivo `index.html` precisa ficar diretamente nessa pasta, e não dentro de uma pasta `ftp` ou `dist`.

Não envie `src`, `node_modules`, arquivos `.asset.json` nem o pacote de servidor. A exportação funciona sem Node.js na hospedagem. Para cada atualização, execute novamente o comando e substitua os arquivos publicados. O preparo exige internet para baixar as fotos e é interrompido se alguma foto ou página estiver incompleta.

Se já gerou as páginas com `npm run build`, use `npm run prepare:ftp` para preparar apenas a pasta de envio.

### Acesso e HTTPS

Na verificação de 18/11/2026, `http://montecivettagelateria.com.br/` retornou **403 Forbidden**, e o certificado HTTPS não correspondia ao domínio. A exportação não altera permissões nem certificados do provedor: confirme a pasta pública correta, a leitura dos arquivos (em geral arquivos `644` e pastas `755`, nunca `777`) e ative um certificado que cubra o domínio no painel da hospedagem. Não há redirecionamento forçado para HTTPS neste pacote enquanto esse certificado não estiver correto.

Confira `/`, `/produtos`, `/sabores`, `/galeria`, `/localizacao`, `/entrega` e `/fale-conosco` abrindo e recarregando cada endereço após o envio.

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
