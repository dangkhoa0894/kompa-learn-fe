import gql from 'graphql-tag';

export const GET_INFO_USER = gql`
  # Write your query or mutation here
  query {
    getDetailUser {
      data
      message
      statusCode
    }
  }
`;

export const ME = gql`
  query me {
    me {
      data
      message
      statusCode
    }
  }
`;
