### Leaf Commerce

![Screenshot 2021-06-08 at 09 56 28](https://user-images.githubusercontent.com/18217523/121124996-710d6780-c843-11eb-9553-e55794a60a0c.png)
![Screenshot 2021-06-08 at 10 23 08](https://user-images.githubusercontent.com/18217523/121125107-a0bc6f80-c843-11eb-8b27-4d4791a5a7a9.png)
![Screenshot 2021-06-08 at 10 23 30](https://user-images.githubusercontent.com/18217523/121125121-a3b76000-c843-11eb-805e-e33e759158c6.png)


This is a monorepo for a simple ecommerce shopping application.

### How to Setup

-   Clone the repo
-   `cd Repo & yarn`

---

-   To get the server running locally

```
- Run prisma generate OR npx prisma generate # creates prisma client mirroring latest db state

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

#### Backend

The entire backend is written with `Node.JS`. The api layer is built with `graphql` and is managed by light-weight, fastify graphql server [Mercurius-JS](https://mercurius.dev/#/).

For database - SQLite is being used for the sake of simplicity as other relational DBMS would be an over-kill.

`Prisma` is used for database modeling and querying.

#### Frontend

Frontend architecture is also pretty straight-forward with `Next.JS` working as the framework. It's pretty feature rich and SSR suits e-commerce app well.

_For managing the state of cart_, I needed a shared state solution. Context works well but for this project, I am using `Zustand` which is a hooks based state management library. It's lighter than redux, easy to boot up and doesn't require introducing `<providers>` in the app component tree.

_Styling_ is done with CSS modules using SCSS as the preprocessor.

_Since a very simple state management solution was needed_, I am **not using Apollo Client** for making `gql` queries instead `graphql-request` is used.

_Testing_. Jest and Testing-library are setup with few test cases written. The app still needs to increase test-coverage.
