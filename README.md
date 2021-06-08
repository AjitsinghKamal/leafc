#### Leaf Commerce

This is a monorepo for a simple ecommerce shopping application.

### How to Setup

-   Clone the repo
-   `cd Repo & yarn`

---

-   To get the server running locally

```
- Run prisma generate # creates prisma client mirroring latest db state

- Run yarn server:dev

```

-   Your server will now be running on `localhost:8000`

-   The interactive graphql server can be accessed on `localhost:8000/playground`

You can also run `prisma studio` to explore the dev db.

---

-   To get frontend running

```
Run yarn client:dev
```

-   The app should be running now `localhost:3000`

### Architecture

##### Backend

The entire backend is written with `Node.JS`. The api layer is built with `graphql` and is managed by light-weight, fastify graphql server [Mercurius-JS](https://mercurius.dev/#/).

For database - SQLite is being used for the sake of simplicity as other relational DBMS would be an over-kill.

`Prisma` is used for database modeling and querying.

##### Frontend

Frontend architecture is also pretty straight-forward with `Next.JS` working as the framework. It's pretty feature rich and SSR suits e-commerce app well.

_For managing the state of cart_, I needed a shared state solution. Context works well but for this project, I am using `Zustand` which is a hooks based state management library. It's lighter than redux, easy to boot up and doesn't require introducing `<providers>` in the app component tree.

_Styling_ is done with CSS modules using SCSS as the preprocessor.

_Since a very simple state management solution was needed_, I am **not using Apollo Client** for making `gql` queries instead `graphql-request` is used.

_Testing_. Jest and Testing-library are setup with few test cases written. The app still needs to increase test-coverage.
