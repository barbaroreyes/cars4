/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooked = /* GraphQL */ `
  mutation CreateBooked(
    $input: CreateBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    createBooked(input: $input, condition: $condition) {
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
export const updateBooked = /* GraphQL */ `
  mutation UpdateBooked(
    $input: UpdateBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    updateBooked(input: $input, condition: $condition) {
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
export const deleteBooked = /* GraphQL */ `
  mutation DeleteBooked(
    $input: DeleteBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    deleteBooked(input: $input, condition: $condition) {
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
