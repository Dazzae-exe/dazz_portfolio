import React from "react";

const PortfolioProvider = React.createContext();

function PortfolioContext({ children }) {
  const [loading, setLoading] = React.useState(true);
  function loadTimeout() {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return timeout;
  }

  React.useEffect(() => {
    loadTimeout();

    () => {
      return AbortSignal.abort();
    };
  }, []);

  return (
    <PortfolioProvider.Provider value={{ loading, setLoading, loadTimeout }}>
      {children}
    </PortfolioProvider.Provider>
  );
}

export { PortfolioContext, PortfolioProvider };
