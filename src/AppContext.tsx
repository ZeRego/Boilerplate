import React, { FC, useReducer, useContext, createContext } from 'react';

export enum ActionType {
  ADD_ITEM,
  TOGGLE_ITEM,
  REMOVE_CHECKED_ITEMS,
}

type Action =
  | { type: ActionType.ADD_ITEM; payload: TodoItem }
  | { type: ActionType.TOGGLE_ITEM; payload: string }
  | { type: ActionType.REMOVE_CHECKED_ITEMS };

interface AppContext {
  state: AppState;
  dispatch: (action: Action) => void;
}

const AppContext = createContext<AppContext>({
  state: { items: [] },
  dispatch: () => undefined,
});

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      return { items: [...state.items, action.payload] };
    }
    case ActionType.TOGGLE_ITEM: {
      return {
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            item.checked = !item.checked;
          }
          return item;
        }),
      };
    }
    case ActionType.REMOVE_CHECKED_ITEMS: {
      return {
        items: state.items.filter((item) => !item.checked),
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { items: [] });
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContext {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
}
