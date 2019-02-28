# Customerbase GraphQL Server

Node.js/Express CRUD backend using GraphQL and JSON-Server

### Version
1.0.0

## Usage

-Install Dependencies

```bash
$ npm install
```

-Run JSON-Server (Port 3000)

```bash
$ npm run json:server
```

-Run Server (Port 4000) - data is from data.json

```bash
$ npm run dev:server
```

-Visit Graphiql IDE

Go to http://localhost:4000/graphql

## Query

Make A Simple Query 

```
{
  students
  {
    id,
    name,
    email,
    age
  }
}
```

Expects to receive data:

```json
{
  "data": {
    "students": [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john@gmail.com",
        "age": 36
      },
      {
        "id": "2",
        "name": "Keith Wilson",
        "email": "kieth@gmail.com",
        "age": 50
      }
    ]
  }
}
```