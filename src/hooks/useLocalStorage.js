import { useEffect, useState } from "react";


export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) setValue(JSON.parse(stored));
    } catch (error) {
      console.error("Cannot read localStorage:", error);
    }
    setLoaded(true);
  }, [key]);

  // Save khi value thay đổi
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Cannot write localStorage:", error);
    }
  }, [key, value, loaded]);

  return [value, setValue];
}
