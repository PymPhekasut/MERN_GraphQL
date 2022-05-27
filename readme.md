### Definition about GraphQL

GraphQL is developed to fetch data from server like static (REST) became Dynamic and fetch by query with Schema definition language (SDL)

- Query is to get data like GET (read). Like insert condition and expression to query data without create new endpoint like REST API
- Mutation is to add (write) or change data like POST, PUT , DELETE
- Schema, Type definition is to define a type of data
- Resolver is the process where locate Query, Mutation and Type definition

```
//sample
type Query { ... }
type Mutation { ... }
type Subscription { ... }

//queries
type Query {
  allPersons(last: Int): [Person!]!
}

//mutation
type Mutation {
  createPerson(name: String!, age: Int!): Person!
}

//subscription
type Subscription {
  newPerson: Person!
}
```
