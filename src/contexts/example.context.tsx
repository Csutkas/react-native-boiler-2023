import React, {memo, useMemo, useState} from 'react';

import {createMandatoryContext, useMandatoryContext} from '../utils';

const DISPLAY_NAME = 'ExampleContext';

interface ContextValue
  extends Readonly<{
    counter: number;
    setCounter: (n: number) => void;
  }> {}

const ExampleContext = createMandatoryContext<ContextValue>(DISPLAY_NAME);

interface ContextProviderProps
  extends Readonly<{
    children?: React.ReactNode;
  }> {}

// This is an example context for future use, just Copy-paste the file contents and rename 'example' to anything
export const ExampleContextProvider = memo<ContextProviderProps>(props => {
  const {children} = props;

  const [counter, setCounter] = useState<number>(0);

  const ContextValue = useMemo<ContextValue>(
    () => ({
      counter,
      setCounter,
    }),
    [counter, setCounter],
  );

  return (
    <ExampleContext.Provider value={ContextValue}>
      {children}
    </ExampleContext.Provider>
  );
});

// The hook that the components can use to get the translation values
export const useExampleContext = (): ContextValue =>
  useMandatoryContext<ContextValue>(ExampleContext);
