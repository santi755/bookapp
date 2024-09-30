// Explanation: https://itnext.io/dependency-injection-in-react-using-inversifyjs-now-with-react-hooks-64f7f077cde6
import { createContext, useContext } from 'react';
import {Container} from 'inversify';

const InversifyContext = createContext<{ container: Container | null }>({
  container: null,
});

type Props = {
  container: Container;
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = (props) => {
  return (
    <InversifyContext.Provider value={{ container: props.container }}>
      {props.children}
    </InversifyContext.Provider>
  );
};

export function useInjection<T>(identifier: symbol) {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error('Container is not provided');
  }
  return container.get<T>(identifier);
}