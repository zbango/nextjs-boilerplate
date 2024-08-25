import { useContext } from 'react';

import { CreateContext } from '@/contexts/Context';
import type { AppContextProps } from '@/types';

export const useAppContext = (): AppContextProps => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};
