import { useEffect, useState } from "react";

interface UseDebounceProps<T> {
  inputValue: T;
  delay?: number;
}

const useDebounce = <T>({
  inputValue,
  delay = 500,
}: UseDebounceProps<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(inputValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebounce;
