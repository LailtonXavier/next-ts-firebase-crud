## Getting Started

First, run the development server:
### NextJS, TypeScript, TailwwindCSS e Firebase

  [Next.js](https://nextjs.org/)
  [TypeScript](https://www.typescriptlang.org)
  [Firebase](https://firebase.google.com/?hl=pt)
  [TailwindCSS](https://tailwindcss.com)

# start
  - npx create-next-app next-crud

  ```
npm run dev

# config
  - config  =  create app next, firebase farestore - criar banco
    - tailwindCSS (v2.2.16) - documentação e configurar para NextJS
      - npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
      - Or: - npx create-next-app -e with-tailwindcss my-project
      - npx tailwindcss init -p
        - *ele vai criar dois arqs: tailwind.config.js e postcss.config.js*
        - Config
          - em `tailwind.config.js` mudar o `purge` q seria o caminho
            - esse comando serve: qnd gerar app vai usar apenas oq esta sendo
            usado, o resto vai ser excluido
            - quais são os components React q vai usar Tailwind
          - incluir no `_app.js` o tailwind

    - Importar TypeScript
      - npm install --save-dev @types/react typescript
      - npm run dev  =  para preencher o `tsconfig.json`
  
  # map config
    - config
    - core (seria o dominio da app)
    - components -> Tabela

  # start map
    - components:
      - Layout.tsx
      - Title (recebendo um filho)
      - Table
      - Icones
      - Botao
      - Formulario
      - Entrada (seria o input)

  # Layout
    - tem `interface`: o que meu componente vai receber
    - importa-lo dentro do `index.tsx` pai.

  # Cliente
    - uma classe com uns atributos
    - possui um metodo `cilenteVazio` ao qual por ele temos acesso a 
    classe
    - podemos criar uma Tabela cheia de clientes para criar os 
      components 

  # Components Tabela 01
    - Uma tabela especifica p clientes
    - vms adicionar o `index.tsx` pai, passando os valores do Cliente
      - Passando uma lista de clientes no atributo

  # Tabela 02 
    - vms estilizar a tabela

  # Tabela 03
    - definir os icones
    - Criar o component Icones
    
    - Vamos chamar esses Icones em `Tabela`
    - vms criar uma func para renderizar os Botóes
      - Essa func recebendo um Cliente p pegar cada pessoa especifica

    - Criando duas func opcional, recebendo um cliente, p editar e excluir
      - fazendo toda a logica: so vai aparecer os botoes se essas acoes tiverem

    - Criar uma func no `index.jsx` para tratar essa funcs

    - Chamar o metodo onClick();
      - com o option, ele so vai chamar no Botao caso seja diferente de nullo
      - em `index.tsx` chamar o metodo `selecionarCliente` e `clienteExcluido`

  # Componente Botao
    - Recebe um children como filho, cor, className... isoo tudo ajuda
    - Ele no momento vai gerar um erro em relação a cor, por causa do
      taailwindCSS, vms corrigir
      - Processo de Torger, qnd o tailwind tira tds as classes q n estao 
      sendo utilizadas
      Corrigir: indo em `tailwind.config.js`
        
  # Componente Formulario
    - Vamos criar um paralelo com o outro componente Entrada
    - import `Entrada` para `Formulario`.
    - Depois de feito importar para `index.tsx`

  # Alternando entre Tabela e Formulario
    - ir em `index.tsx`
    - fazer logica de ver ou não `table` e `form`
    - qnd clicar em cancelar dentro de `formulario` voltar para `home`

    - vms retornar um cliente novo
      - `formulario` com o metodo `clienteMudou`

    - em `index.tsx` criar um metodo com cliente novo (salvarCliente)
      - esse metodo vai ser passado por props qnd cliente form modificado (clienteMudou)

  # Integrando Tabela e Formulario
    - Clicar em alterar ir para tela Home
      - `Tabela` com o metodo `Cliente mudou` a gente vai no metodo 
        `Salvar cliente` e defini `setVisivel` para `Tabela`.
    
  # Vamos separar essas logicas dentro de um Hook
    - Isso nos ajuda pq podemos reutilizar logicas dentro do React
    - fazer toda Logica dentro de `index.tsx` para depois separar tudo

    - criando um estado em `index.tsx` (cliente e setClient)
      - enviando p formulario em props cliente
      - ainda dentro: clienteSelecionado vai da um setCliente do novo stado
        - apos setar setCliente, devemos ir p Formulario, vai levar os dados
        do cliente

### Configurando o Firebase
    - criar um arquivo (.env.local)
      - isso para n ir pro codigo do repositorio
      - Para Next nessa variaveis precisamos iniciar com NExt public
    - criar pasta `src->backend`
      - `config.ts` vai esta as configurações do firebase

# instalar Firebase
   - npm i firebase
   - em `src->backend->config.ts` vai ficar todas as configuracoes

# Criar interfaces com todos os metodos
  - em `src->core->ClienteRepositio.ts` vai ser uma interface

  - no meu backend criar um classe pegando nossa interface
    - `backend->db->ColecaoCliente` importanto a interface
    - ficara todos os metodos do CRUD, agora é so importar nos components

# integrando cadastro com Firebase
  - em `index.tsx` vms criar um repo pegando nossos Metodos
    - aqui poderiamos implementar nossas regras, etc.

  - pega o repo criado com todos os metodos
  - o metodo `salvarCliente()` vms puxar o do repo
    - adicionar metodo obterTodos
    - depois q salvar chama o metodo ObetrTodos
  - chama o metodo excluir e esta pronto o CRUD

### Ate aqui esta o projeto completo, porem esta todo mundo junto
  - vamos utilizar hooks para organizar, isso esta em outra branch

