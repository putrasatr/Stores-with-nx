import { useState, useEffect } from "react";

interface Props {
  debouncedValue: string;
  isTyping: boolean;
}

export default function useDebounce(value: string, delay: number): Props {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setIsTyping(false);
      setDebouncedValue(value);
    }, delay);
    return () => {
      setIsTyping(true);
      clearTimeout(handler);
    };
  }, [value, delay]);
  return { debouncedValue: debouncedValue, isTyping };
}
