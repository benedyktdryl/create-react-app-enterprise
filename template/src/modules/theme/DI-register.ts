import { Container } from "inversify";

import { IThemeService, THEME_SERVICE_ID } from "./theme.types";
import { ThemeService } from "./theme.service";

export function register(container: Container) {
  container.bind<IThemeService>(THEME_SERVICE_ID).to(ThemeService).inSingletonScope();
}
