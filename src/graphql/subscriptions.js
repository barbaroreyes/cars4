/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooked = /* GraphQL */ `
  subscription OnCreateBooked(
    $filter: ModelSubscriptionBookedFilterInput
    $owner: String
  ) {
    onCreateBooked(filter: $filter, owner: $owner) {
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
export const onUpdateBooked = /* GraphQL */ `
  subscription OnUpdateBooked(
    $filter: ModelSubscriptionBookedFilterInput
    $owner: String
  ) {
    onUpdateBooked(filter: $filter, owner: $owner) {
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
export const onDeleteBooked = /* GraphQL */ `
  subscription OnDeleteBooked(
    $filter: ModelSubscriptionBookedFilterInput
    $owner: String
  ) {
    onDeleteBooked(filter: $filter, owner: $owner) {
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
