import { useEffect, useState } from "react";

const useOnline = () => {
  const [onLine, onLineSet] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      onLineSet(window.navigator.onLine);
    }
  }, []);
  return onLine;
};

export default useOnline;
