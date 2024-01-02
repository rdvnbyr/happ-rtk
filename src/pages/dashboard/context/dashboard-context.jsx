import { createContext, useCallback, useState, useContext } from 'react';

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // modal state
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = useCallback((row) => {
    setShowDialog(true);
    setData(row);
  }, []);
  const closeDialog = useCallback(() => {
    setShowDialog(false);
    setData(null);
  }, []);

  const value = {
    data,
    showDialog,
    openDialog,
    closeDialog,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
};
