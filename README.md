# Website do Núcleo de Leitura em Psicanálise

Este é o repositório oficial do site público do Núcleo de Leitura em Psicanálise. O projeto foi desenvolvido para fornecer informações sobre a instituição, sua programação de estudos e formas de contato.

## ✨ Tecnologias Utilizadas

O projeto foi construído com uma stack moderna, focada em performance e flexibilidade na gestão de conteúdo:

* **Framework:** [Next.js](https://nextjs.org/) (com App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **CMS (Gestão de Conteúdo):** [Sanity.io](https://www.sanity.io/)
* **Hospedagem:** [Vercel](https://vercel.com/)

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto no seu ambiente de desenvolvimento.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18.18 ou superior)
* [npm](https://www.npmjs.com/) ou outro gestor de pacotes

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/giovaneaguiar/nlps-site.git](https://github.com/giovaneaguiar/nlps-site.git)
    cd nlps-site
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um ficheiro chamado `.env.local` na raiz do projeto.
    * Copie o conteúdo do exemplo abaixo para o seu ficheiro e preencha com as suas chaves do Sanity.

    **`.env.local`**
    ```
    SANITY_STUDIO_PROJECT_ID="SEU_PROJECT_ID_DO_SANITY"
    SANITY_STUDIO_DATASET="SEU_DATASET_DO_SANITY" # (geralmente 'production')
    ```
    > Você pode encontrar o `Project ID` e o `Dataset` no seu painel em [manage.sanity.io](https://manage.sanity.io).

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    * O site estará disponível em `http://localhost:3000`.
    * O Sanity Studio (painel de conteúdo) estará disponível em `http://localhost:3000/nlps`.
