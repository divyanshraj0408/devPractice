import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 200);
  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}
export default App;
