import { Theme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export interface IThemeService {
  theme: Theme;

  setPalette: (paletteType: PaletteOptions["type"]) => void;
  switchPalette: () => void;
}

export const THEME_SERVICE_ID = Symbol.for("theme-service");
