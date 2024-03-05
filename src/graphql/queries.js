/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooked = /* GraphQL */ `
  query GetBooked($id: ID!) {
    getBooked(id: $id) {
      id
      name
      last
      email
      phone
      addressPickUp
      addressDropeOff
      passagers
      type
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listBookeds = /* GraphQL */ `
  query ListBookeds(
    $filter: ModelBookedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        last
        email
        phone
        addressPickUp
        addressDropeOff
        passagers
        type
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
