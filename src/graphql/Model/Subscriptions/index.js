import gql from 'graphql-tag';

export const SUBSCRIPTIONS_STATUS_MODEL = gql`
  subscription notifyTrain($userId: Int!) {
    notifyTrain(userId: $userId) {
      message
      statusCode
      data
    }
  }
`;

export const SUBSCRIPTIONS_UPLOAD_MODEL = gql`
  subscription notifyUpload($userId: Int!) {
    notifyUpload(userId: $userId) {
      message
      statusCode
      data
    }
  }
`;
