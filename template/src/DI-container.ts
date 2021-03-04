import { Container } from "inversify";

/**
 * Modules services to register
 */
import { register as registerTheme } from "./modules/theme/DI-register";

export const container = new Container();

[registerTheme].forEach((cb) => cb(container));
