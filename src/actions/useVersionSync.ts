import { useEffect } from "react";

const useVersionSync = (version: string) => {
  useEffect(() => {
    const currentVersion = localStorage.getItem("version");
    if (currentVersion === null || currentVersion !== version) {
      localStorage.clear();
      localStorage.setItem("version", version);
    }
  }, [version]);
};

export default useVersionSync;
