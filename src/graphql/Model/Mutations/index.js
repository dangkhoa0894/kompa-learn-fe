import gql from 'graphql-tag';

// CRUD MODEL
export const INACTIVE_MODEL = gql`
  mutation inactiveModel($dataInput: modelIdInput!) {
    inactiveModel(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const CREATE_MODEL = gql`
  mutation createModel($dataInput: defineModelInput) {
    createModel(dataInput: $dataInput) {
      message
      statusCode
      data
    }
  }
`;

// TRAIN DATA
export const UPLOAD_DATA_RAW = gql`
  #   mutation UploadFileRaw($user_id: String!, $model_id: String!, $file: Upload!, $size: Int!) {
  #     UploadFileRaw(user_id: $user_id, model_id: $model_id, file: $file, size: $size) {
  #       message
  #       statusCode
  #     }
  #   }
  mutation upLoadFileRaw($dataInput: uploadFileRaw!) {
    upLoadFileRaw(dataInput: $dataInput) {
      message
      statusCode
      data
    }
  }
`;

export const UPDATE_COLUMN_DATA_RAW = gql`
  mutation updateDataModel($dataInput: updateDataInput!) {
    updateDataModel(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const TRAIN_DATA = gql`
  mutation trainModel($dataInput: modelIdInput) {
    trainModel(dataInput: $dataInput) {
      message
      statusCode
      data
    }
  }
`;

export const UPLOAD_FILE_FORMAT = gql`
  mutation upLoadFileFormat($dataInput: uploadFileRaw!) {
    upLoadFileFormat(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

// FEATURE

export const PREDICT_MODE = gql`
  mutation PredictModel($config: ModelInput!, $data: [ModelPredictData]!) {
    PredictModel(config: $config, data: $data) {
      message
      statusCode
    }
  }
`;

export const PREDICT_CONTENT = gql`
  mutation predictAContent($dataInput: predictAContentInput) {
    predictAContent(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;

export const EXTRACTION_URL = gql`
  mutation ExtractionURL($data: String!) {
    ExtractionURL(data: $data) {
      message
      statusCode
    }
  }
`;

export const EXTRACTION_FAKE_NEWS = gql`
  mutation FakeNews($data: String!) {
    FakeNews(data: $data) {
      message
      statusCode
    }
  }
`;

export const EXTRACTION_KEY_WORD = gql`
  mutation ExtractionKeyword($data: String!, $number: Int!) {
    ExtractionKeyword(data: $data, number: $number) {
      message
      statusCode
    }
  }
`;

// CONFIG MODEL

export const UPDATE_BASIC_MODEL = gql`
  mutation UpdateBasicModel(
    $setting: ModelTrainSetting!
    $config: ModelTrainConfig!
    $descriptions: String!
    $model_name: String!
  ) {
    UpdateBasicModel(
      setting: $setting
      config: $config
      descriptions: $descriptions
      model_name: $model_name
    ) {
      statusCode
      message
    }
  }
`;

export const UPDATE_ADVANCE_MODEL = gql`
  mutation UpdateAdvanceModel(
    $setting: ModelTrainSetting!
    $config: ModelTrainConfig!
    $descriptions: String!
    $model_name: String!
  ) {
    UpdateAdvanceModel(
      setting: $setting
      config: $config
      descriptions: $descriptions
      model_name: $model_name
    ) {
      statusCode
      message
    }
  }
`;

// CREATE LABEL
export const UPDATE_LABEL_MODEL = gql`
  mutation updateLabelModel($dataInput: updateLabelInput) {
    updateLabelModel(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const UPDATE_LABEL_FOR_CONTENT = gql`
  mutation updateLabelContent($dataInput: labelContentInput) {
    updateLabelContent(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const UPDATE_SENTIMENT_FOR_CONTENT = gql`
  mutation updateSentimentContent($dataInput: sentimentContentInput) {
    updateSentimentContent(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const SUBMIT_FILE_RAW = gql`
  mutation sendFileToCore($dataInput: modelIdInput) {
    sendFileToCore(dataInput: $dataInput) {
      message
      statusCode
    }
  }
`;

export const DUPLICATE_CONTENT_MODEL = gql`
  mutation duplicateContent($dataInput: duplicateModelInput) {
    duplicateContent(dataInput: $dataInput) {
      statusCode
      message
      data
    }
  }
`;
export const CHANGE_VERSION_MODEL = gql`
  mutation changeVersion($dataInput: versionInput!) {
    changeVersion(dataInput: $dataInput) {
      message
      statusCode
      data
    }
  }
`;

export const UPDATE_CONFIG_MODEL = gql`
  mutation updateConfigModel($dataInput: configInput) {
    updateConfigModel(dataInput: $dataInput) {
      message
      statusCode
      data
    }
  }
`;

export const RENAME_MODEL = gql`
  mutation renameModel($dataInput: renameInput) {
    renameModel(dataInput: $dataInput) {
      statusCode
      message
      data
    }
  }
`;

export const MODIFY_CONTENT_MODEL = gql`
  mutation modifyModel($dataInput: modifyModelInput) {
    modifyModel(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;

export const UPDATE_INFO_MODEL = gql`
  mutation updateInfoModel($dataInput: updateInfoModelInput) {
    updateInfoModel(dataInput: $dataInput) {
      data
      message
      statusCode
    }
  }
`;
