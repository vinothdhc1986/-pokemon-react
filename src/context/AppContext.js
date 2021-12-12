import { useContext, createContext, useReducer } from 'react';
import { initialPokemonState, pokemonReducer } from './reducers/AppReducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);
  console.log(`state ${JSON.stringify(state)} dispatch ${JSON.stringify(dispatch)}`);
  return (
    <AppContext.Provider value={{
      ...state,
      dispatch
    }}>
      { children }
    </AppContext.Provider>
  )
};

export const useAppContext = () => {
  return useContext(AppContext);
};
