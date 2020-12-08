import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient } from "@apollo/client";

import { Modal } from "antd";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";
import { split, from } from "apollo-link";
import apolloUploadClient from "apollo-upload-client";
import { onError } from "apollo-link-error";
import { WebSocketLink } from "@apollo/link-ws";

import { resolvers } from "SRC/graphql/Resolve/config";
import { cache } from "SRC/graphql/Cache/initialCache";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
const URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_ENDPOINT_DEV
    : process.env.REACT_APP_API_ENDPOINT_HOST;
const httpLink = apolloUploadClient.createUploadLink({
  // uri: `http://${window.location.hostname}:9000/nlp`,
  uri: `http://${URL || window.location.hostname}:9000/nlp`,
  headers: {
    "keep-alive": true,
  },
});
const wsLink = new WebSocketLink({
  //   uri: `ws://${window.location.hostname}:9006/nlp`,
  uri: `ws://${URL || window.location.hostname}:9006/nlp`,
  options: {
    reconnect: true,
  },
});
console.log("==>", process.env);
const middlewareLink = setContext(async () => {
  const token = await localStorage.getItem("token");
  const refreshToken = await localStorage.getItem("refreshToken");
  return {
    headers: {
      "x-token": `${token}`,
      "x-refresh-token": `${refreshToken}`,
    },
  };
});
let countError = 0;
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.map((error) => {
      // eslint-disable-next-line no-plusplus
      countError++;
      if (error.message === "Not permission") {
        window.location.href = "/login";
        countError = 0;
      }
      if (error.message === "NOT OWNER MODEL" && countError === 1) {
        Modal.error({
          title: "Error",
          content: (
            <div>
              <p>You do not have permission to access this content !</p>
            </div>
          ),
          onOk() {
            window.location.href = "/main/dashboard";
            countError = 0;
          },
          okButtonProps: { type: "danger" },
          okText: "Back to DashBoard",
        });
      }
      return error;
    });
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: from([errorLink, middlewareLink, link]),
  cache,
  resolvers,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
