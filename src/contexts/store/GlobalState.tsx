import { createContext, useReducer, ReactNode, Dispatch } from "react";
import reducers from "./Reducers";

// Define the shape of your state
interface State {
  callback: boolean;
}

// Define the shape of your action (adjust based on your actual reducer)
interface Action {
  type: string;
  payload?: any;
}

// Create the context with the appropriate types
export const DataContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const initialState: State = {
    callback: false,
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
