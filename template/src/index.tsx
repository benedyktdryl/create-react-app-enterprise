import "reflect-metadata";

import React from "react";
import ReactDOM from "react-dom";

import { container } from "./DI-container";
import { Provider as DependencyInjectionContainer } from "./DI-container-react";

import { ThemeProvider } from "./modules/theme/theme.provider.component";
import { Layout } from "./modules/layout/layout.component";

const App: React.FC = () => {
  return (
    <DependencyInjectionContainer container={container}>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </DependencyInjectionContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
