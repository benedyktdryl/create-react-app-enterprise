import "reflect-metadata";

import React from "react";
import ReactDOM from "react-dom";

import { container } from "./DI-container";
/**
 * @todo set proper name according to convention `ApplicationKernelProvider`
 */
import { Provider as DependencyInjectionContainer } from "./DI-container-react";

import { ThemeProvider } from "./modules/theme/theme.provider.component";
import { Layout } from "./modules/layout/layout.component";

/**
 * @todo routing examples with https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#containergettagged
 * @todo index.tsx should only render `application` module
 * @todo application, inversify and react containers should be placed inside `application` module as well
 * @todo check mindmaps app component comments (use tags instead of direct inject)
 */

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

/**
 * @todo tsconfig "importsNotUsedAsValues": "error"
 * @todo https://github.com/jondot/hygen for generating modules https://github.com/benedyktdryl/mindmaps/commit/6dcd8caeda6cd1292a18f02584c59f1dc11cb83d
 * @todo get readme from `mindmaps`
 * @todo adapt `mindmaps` `services` pattern + `makeAutoObservable` annotations injection
 * @todo add `mindmaps` mobx config to index.tsx
 */
