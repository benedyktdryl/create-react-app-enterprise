import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useInjection } from "../../DI-container-react";
import { IThemeService, THEME_SERVICE_ID } from "../theme/theme.types";

import { Brightness6, Brightness7 } from "@material-ui/icons";

export const Layout = observer(() => {
  const themeService = useInjection<IThemeService>(THEME_SERVICE_ID);
  const PaletteModeIcon = themeService.paletteType === "dark" ? Brightness7 : Brightness6;

  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ display: "flex", flexDirection: "row-reverse" }}>
        <IconButton onClick={themeService.switchPalette} color="inherit">
          <PaletteModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});
