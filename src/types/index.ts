export type AppContextProps = {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  showItem: boolean;
  setShowItem: React.Dispatch<React.SetStateAction<boolean>>;
  activeMobileMenu: boolean;
  setActiveMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTop: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAuth: boolean;
  setToggleAuth: React.Dispatch<React.SetStateAction<boolean>>;
  rightBar: boolean;
  setRightBar: React.Dispatch<React.SetStateAction<boolean>>;
  shouldCollapseLeftbar: boolean;
  shouldCollapseRightbar: boolean;
  isLightTheme: boolean;
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};
