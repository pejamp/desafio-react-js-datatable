import { createContext, useEffect, useState } from "react";
import api from '../services/api';

export const DatatableContext = createContext([]);

export function DatatableProvider({children}) {
  const [servers, setServers] = useState([]);
  const [isSelected, setIsSelected] = useState([]);

  useEffect(() => {
    api.get('servers')
      .then(response => setServers(response.data))
  }, []);

  return (
    <DatatableContext.Provider value={{ servers, isSelected, setIsSelected }}>
      {children}
    </DatatableContext.Provider>
  );
}