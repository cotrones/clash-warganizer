# Clash Warganizer

This is the source code for a web app that helps clan leaders and co-leaders organize wars in Clash of Clans. This will get updated as the project is built.

## Backend

### Tools

- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express) - _The express integration of Apollo Server_
- [type-graphql](https://typegraphql.com/) - _Modern framework for GraphQL API in Node.js using Typescript_

### Getting Started

#### Prerequisites

- Node version 14 or higher
- yarn or npm

#### Installation

Clone the repo

```
git clone https://github.com/cotrones/clash-warganizer.git
```

Move to the server directory

```
cd server
```

Install the packages

```
yarn
# OR
npm i
```

#### Config

Add a `.env` file and add the environment variables shown in `.env.example`

> Note: The CORS_ORIGIN environment variable will be used when we connect to the frontend. For now you can set this as \*

#### Scripts

Run the server in development mode

> Note: You can access Apollo's Studio Sandbox by visiting localhost:PORT/graphql (make sure PORT is the same as the port you set in .env)

```
yarn dev
# OR
npm run dev
```

Build the `dist/` directory with compiled production files

```
yarn build
# OR
npm run build
```

Start the production build

```
yarn start
# OR
npm start
```

Generate .env types and .env.example file

```
yarn env
# OR
npm run env
```

# Disclaimer

This material is unofficial and is not endorsed by Supercell. For more information see Supercell's Fan Content Policy: www.supercell.com/fan-content-policy.
