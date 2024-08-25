'use client';

import type { ReactNode } from 'react';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { AppContextProps } from '@/types';

export const CreateContext = createContext<AppContextProps | undefined>(
  undefined,
);

type ContextProps = {
  children: ReactNode;
};

const Context: React.FC<ContextProps> = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [toggleTop, setToggle] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [showItem, setShowItem] = useState(true);
  const [activeMobileMenu, setActiveMobileMenu] = useState(true);
  const [isLightTheme, setLightTheme] = useState(true);

  const checkScreenSize = () => {
    if (window.innerWidth < 1200) {
      setMobile(false);
      setRightBar(false);
    } else {
      setMobile(true);
      setRightBar(true);
    }
  };

  useEffect(() => {
    const themeType = localStorage.getItem('project-theme');
    if (themeType === 'dark') {
      setLightTheme(false);
      document.body.classList.remove('active-light-mode');
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('active-light-mode');
      localStorage.setItem('project-theme', 'light');
    } else {
      document.body.classList.remove('active-light-mode');
      localStorage.setItem('project-theme', 'dark');
    }
  }, [isLightTheme]);

  const toggleTheme = useCallback(() => {
    setLightTheme(prevTheme => !prevTheme);
  }, [setLightTheme]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const shouldCollapseLeftbar = !mobile;
  const shouldCollapseRightbar = !rightBar;

  return (
    <CreateContext.Provider
      value={useMemo(
        () => ({
          mobile,
          setMobile,
          showItem,
          setShowItem,
          activeMobileMenu,
          setActiveMobileMenu,
          toggleTop,
          setToggle,
          toggleAuth,
          setToggleAuth,
          rightBar,
          setRightBar,
          shouldCollapseLeftbar,
          shouldCollapseRightbar,
          isLightTheme,
          setLightTheme,
          toggleTheme,
        }),
        [
          mobile,
          setMobile,
          showItem,
          setShowItem,
          activeMobileMenu,
          setActiveMobileMenu,
          toggleTop,
          setToggle,
          toggleAuth,
          setToggleAuth,
          rightBar,
          setRightBar,
          shouldCollapseLeftbar,
          shouldCollapseRightbar,
          isLightTheme,
          setLightTheme,
          toggleTheme,
        ],
      )}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
