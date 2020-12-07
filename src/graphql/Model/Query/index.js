import gql from 'graphql-tag';

export const GET_LIST_MODEL_USER = gql`
  query GetInfoModelByUser($user_id: String!) {
    GetInfoModelByUser(user_id: $user_id) {
      message
      statusCode
    }
  }
`;

export const GET_ALL_ALGORITHM = gql`
  query getAllAlgorithms {
    getAllAlgorithms {
      message
      data
      statusCode
    }
  }
`;

export const GET_DETAIL_MODEL = gql`
  query getDetailModel($dataInput: modelIdInput) {
    getDetailModel(dataInput: $dataInput) {
      data {
        id
        modelName
        userId
        status
        typeData
        typeModel
        descriptions
        multipleLabel
        sizeFile
        active
        createAt
        updateAt
        owner
        totalRows
        timeTrain
        totalTimes
        sentiment
        process
        totalCategories
        counterLabel
        config
        labels
        score {
          epochs
          accuracy
          active
          algorithm {
            coreId
            id
            name
          }
          f1Score
          id
          loss
          modelId
          precision
          recall
          trainAcc
          trainLoss
          updateAt
          valAcc
          valLoss
          validation
          version
          wordcloud
        }
      }
      message
      statusCode
    }
  }
`;
export const GET_ALL_MODELS = gql`
  query {
    getAllModels {
      data {
        id
        modelName
        userId
        status
        typeData
        sentiment
        typeModel
        descriptions
        multipleLabel
        sizeFile
        active
        createAt
        updateAt
        owner
        totalRows
        timeTrain
        totalTimes
        process
        totalCategories
        counterLabel
        config
        labels
        score {
          epochs
          accuracy
          active
          algorithm {
            coreId
            id
            name
          }
          f1Score
          id
          loss
          modelId
          precision
          recall
          trainAcc
          trainLoss
          updateAt
          valAcc
          valLoss
          validation
          version
          wordcloud
        }
      }
      message
      statusCode
    }
  }
`;

export const GET_DATA_TRAIN_BY_INDEX = gql`
  query getDataByIndex($dataInput: dataModelInput) {
    getDataByIndex(dataInput: $dataInput) {
      statusCode
      content
      message
    }
  }
`;

export const GET_TEN_COLUMN_DATA = gql`
  query getTenColumns($dataInput: modelIdInput) {
    getTenColumns(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;

export const GET_PREDICT_DEMO = gql`
  query templatePredict($dataInput: modelIdInput!) {
    templatePredict(dataInput: $dataInput) {
      message
      data
      statusCode
    }
  }
`;

export const GET_PREDICT_BY_PAGE = gql`
  query predictByPage($dataInput: predictInput) {
    predictByPage(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;

export const PREDICT_ALL = gql`
  query predictAll($dataInput: predictInput) {
    predictAll(dataInput: $dataInput) {
      message
      data
      statusCode
    }
  }
`;

export const GET_SCORE_MODEL = gql`
  query getScoreModel($user_id: String!, $model_id: Int!) {
    getScoreModel(user_id: $user_id, model_id: $model_id) {
      message
      statusCode
    }
  }
`;

export const GET_INFO_MODEL = gql`
  query getInfoModel {
    InfoModel @client
  }
`;
export const GET_INFO = gql`
  query getThu {
    InfoModel @client
  }
`;

export const GET_INFO_MODEL_CLIENT = gql`
  query {
    viewDetailModel @client {
      id
    }
  }
`;

export const GET_ACTIVE_MODIFY_MODEL = gql`
  query contentModifyModel {
    contentModifyModel @client {
      data
      contentActive
    }
  }
`;

export const GET_FILTER_DATA_MODEL = gql`
  query {
    filterDataModel @client {
      data
    }
  }
`;

export const GET_TEMPLATE_MODEL = gql`
  query getTemplateModel {
    getTemplateModel {
      data
      message
      statusCode
    }
  }
`;

export const GET_ALL_ID_MODEL = gql`
  query {
    getAllIdModel {
      data {
        id
      }
      message
      statusCode
    }
  }
`;

export const GET_ALL_DATA_MODEL = gql`
  query getDataTrainModelFilter($dataInput: predictInputWithFilter) {
    getDataTrainModelFilter(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;

export const GET_DETAIL_MODEL_WITH_COUNTER_LABEL_DB = gql`
  query getDetailModelWithCounterLabel($dataInput: modelIdInput) {
    getDetailModelWithCounterLabel(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;
