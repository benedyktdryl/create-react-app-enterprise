import { AppBar, Button, Toolbar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useInjection } from "../../DI-container-react";
import { IThemeService, THEME_SERVICE_ID } from "../theme/theme.types";

export const Layout = observer(() => {
  const themeService = useInjection<IThemeService>(THEME_SERVICE_ID);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Button onClick={themeService.switchPalette} color="inherit">
          Change palette
        </Button>
      </Toolbar>
    </AppBar>
  );
});
