import React from "react";
import Sentiment_icon from "SRC/resource/images/sentiment_icon.png";
import Topic_icon from "SRC/resource/images/topic_icon.png";
import Multiple_icon from "SRC/resource/images/multiple_icon.png";

export const breakpoints = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1600px",
};

export const storageCode = {
  DATA_TRAIN: "data_train",
  DATA_STATS: "_s_t_",
  RECENTLY_MODEL: "_r_m_",
  DATA_USER: "_d_u_",
};

export const ERROR_CODE = {
  SUCCESS: 200,
};

export const URL = {
  LOGO_COMPANY:
    "data:image/png;base64,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",
};

export const SCORE_LABEL = {
  test_acc: "Test Accuracy",
  val_acc: "Validation Accuracy",
};

export const STEP_CREATE_MODEL = {
  0: {
    label: "Error file",
    status: "Error",
    href: "upload",
  },
  //   1: {
  //     label: 'Create label',
  //     status: 'Configuring',
  //   },
  1: {
    // wait upload
    label: "Upload file",
    status: "In Progress",
    href: "upload",
  },
  2: {
    // not upload
    label: "Upload file",
    status: "Pending",
    href: "upload",
  },
  3: {
    label: "Choose text",
    status: "In Progress",
    href: "column",
  },
  4: {
    label: "Define Tag",
    status: "In Progress",
    href: "defineTag",
  },
  5: {
    // not traning
    label: "Train",
    status: "Train",
    href: "train",
  },
  6: {
    // do training
    label: "Train",
    status: "Train",
  },
  7: {
    label: "Completed",
    status: "Completed",
  },
};
export const TYPE_MODEL = [
  {
    id: "topic",
    label: "Topic Classification",
    icon: <img src={Topic_icon} alt="topic" className="topic" />,
  },
  {
    id: "sentiment",
    label: "Sentiment",
    icon: <img src={Sentiment_icon} alt="sentiment" className="sentiment" />,
  },
  {
    id: "multiple",
    label: "Multiple Topic & Sentiment",
    icon: <img src={Multiple_icon} alt="multiple" className="multiple" />,
  },
];

export const _TYPENAME = {
  RES_MODEL: "Model",
  RES_SCORE: "Score",
  CACHE_MODIFY_MODEL: "CacheModifyModel",
};

export const DEFAULT_CONFIG = {
  batchSize: 32,
  maxFeatures: 30000,
  maxLen: 300,
  embedSize: 128,
  epochs: "100",
  threshold: 0.7,
};
