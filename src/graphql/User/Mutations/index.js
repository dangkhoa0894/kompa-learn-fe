import gql from 'graphql-tag';

export const UPDATE_INFO_USER = gql`
  mutation updateInfoUser($input: InfoUser!, $password: String) {
    updateInfoUser(input: $input, password: $password) {
      message
      statusCode
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($username: String!, $password: String!, $newPassword: String!) {
    changePassword(username: $username, password: $password, newPassword: $newPassword) {
      message
      statusCode
    }
  }
`;

export const LOGIN = gql`
  mutation login($dataInput: LoginInput) {
    login(dataInput: $dataInput) {
      refreshToken
      token
      statusCode
      message
      user
    }
  }
`;
