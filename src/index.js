import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <App />;
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
