import { ThemeProvider as MUIThemeProvider } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";

import { useInjection } from "../../DI-container-react";

import { IThemeService, THEME_SERVICE_ID } from "./theme.types";

type Props = {
  children: React.ReactChildren | React.ReactNode;
};

export const ThemeProvider = observer((props: Props) => {
  const themeService = useInjection<IThemeService>(THEME_SERVICE_ID);

  return <MUIThemeProvider theme={themeService.theme}>{props.children}</MUIThemeProvider>;
});
