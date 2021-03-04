import { makeAutoObservable } from "mobx";
import { decorate, injectable } from "inversify";

import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

import { IThemeService } from "./theme.types";

export class ThemeService implements IThemeService {
  public paletteType: PaletteOptions["type"] = "light";

  constructor() {
    makeAutoObservable(this);
  }

  public get theme() {
    return createMuiTheme({
      palette: {
        type: this.paletteType,
      },
    });
  }

  public setPalette = (paletteType: PaletteOptions["type"]) => {
    this.paletteType = paletteType;
  };

  public switchPalette = () => {
    this.setPalette(this.paletteType === "light" ? "dark" : "light");
  };
}

decorate(injectable(), ThemeService);
