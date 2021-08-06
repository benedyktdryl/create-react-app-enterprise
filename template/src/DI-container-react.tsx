import React, { useContext } from "react";

import { Container, interfaces } from "inversify";

const InversifyContext = React.createContext<{ container: Container | null }>({ container: null });

/**
 * @todo inline component Props
 */
type Props = {
  container: Container;
};

export const Provider: React.FC<Props> = (props) => {
  return <InversifyContext.Provider value={{ container: props.container }}>{props.children}</InversifyContext.Provider>;
};

/**
 * @todo wrap `inject` with custom method to cast to `ClassDecorator` (find related issue on GH)
 */

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);

  if (!container) {
    /**
     * @todo throw better error
     */
    throw new Error();
  }

  return container.get<T>(identifier);
}
