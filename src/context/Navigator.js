import React, {
  createContext,
  isValidElement,
  useState,
  Children,
} from "react";

const NavContext = createContext();

const Route = ({ to, component }) => {
  return <></>;
};

const Router = ({ children }) => {
  const [currentPage, setCurrentPage] = useState();

  const navigate = () => {
    const arrayChildren = Children.toArray(children);
    Children.forEach(arrayChildren, (child, index) => {
      if (isValidElement(child)) {
        console.log("child props", child.props);
        const { to, component } = child.props;
      }
    });
  };

  return <div>{currentPage}</div>;
};

export const Navigator = ({ children }) => {
  const value = { Router, navigate };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
