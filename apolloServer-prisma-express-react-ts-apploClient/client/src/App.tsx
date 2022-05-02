import React from "react";
import AppRouter from "./routes/AppRoutes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import config from "./config/";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  const client = new ApolloClient({
    uri: config.DB_URL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
