import React, { createContext, useContext, useEffect, useState } from "react";
const RouterContext = createContext({ route: window.location.pathname });
const Router = ({ children }) => {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []);
  return (
    <RouterContext.Provider value={{ route }}>
      {children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

const Route = ({ to, component, children }) => {
  const { route } = useRouter();
  return to === route ? component || children : null;
};

const useNavigate =
  () =>
  (to, data = {}) => {
    window.history.pushState(data, "", to);
    window.dispatchEvent(new PopStateEvent("navigate"));
  };

export { Router, Route, useRouter, useNavigate };
