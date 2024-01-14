import React, { createContext, useContext, ReactNode, useState } from 'react';

export interface AppState {
  name: string;
  balance: number;
}

interface AppContextType {
  globalState: AppState;
  updateGlobalState: (key: keyof AppState, value: React.SetStateAction<AppState[keyof AppState]>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<AppState>({
    name: 'Convidado',
    balance: 0,
  });

  const updateGlobalState: AppContextType['updateGlobalState'] = (key, value) => {
    setGlobalState((prevState) => ({
      ...prevState,
      [key]: typeof value === 'function' ? (value as (prevStateValue: AppState[keyof AppState]) => AppState[keyof AppState])(prevState[key]) : value,
    }));
  };

  const contextValue: AppContextType = {
    globalState,
    updateGlobalState,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
