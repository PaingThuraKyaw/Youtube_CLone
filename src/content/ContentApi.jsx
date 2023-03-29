import React, { createContext, useContext, useEffect, useState } from "react";
import { fetching } from "../Fetch/Api";
export const ContentApi = createContext();

export const AppContent = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  const data = {
    isLoading,
    setIsLoading,
    search,
    setSearch,
    category,
    setCategory,
    mobileMenu,
    setMobileMenu,
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const fetchData = (query) => {
    setIsLoading(true)
    fetching(`search/?q=${query}`).then(({contents}) => {
      setIsLoading(false);
      setSearch(contents)
    });
  };

  return <ContentApi.Provider value={data}>{children}</ContentApi.Provider>;
};

export const useCustom = () => useContext(ContentApi);
