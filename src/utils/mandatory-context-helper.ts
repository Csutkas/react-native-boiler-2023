import React from 'react';

/**
 * Create a React context.
 * When creating a React context with the help of this method, then it's
 * not required to provide a default context provider value.
 * @param displayName The display name for the created React context
 */
export const createMandatoryContext = <T>(
  displayName: string,
): React.Context<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context = React.createContext<T>(undefined as any);
  context.displayName = displayName;
  return context;
};

/**
 * Consume a React context.
 * If there is no context provider found up in the component tree, it throws an error.
 * @param context The React context to use
 */
export const useMandatoryContext = <T>(context: React.Context<T>): T => {
  const resolvedContext = React.useContext(context);

  if (!resolvedContext) {
    throw new Error(
      `Context with name ${context.displayName} cannot be resolved!`,
    );
  }

  return resolvedContext;
};
