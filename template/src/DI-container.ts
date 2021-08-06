import { Container } from "inversify";

/**
 * Modules services to register
 * @todo make use of https://github.com/inversify/InversifyJS/blob/master/wiki/container_modules.md
 * @todo should be named `kernel` and explained in Readme (`container` is confusing in React)
 * @todo name `register` with module name
 */
import { register as registerTheme } from "./modules/theme/DI-register";

export const container = new Container();

[registerTheme].forEach((cb) => cb(container));
