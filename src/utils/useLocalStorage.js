import { useState } from 'react';
const STORAGE_KEY = '_close_Frontend_Takehome';

const useLocalStorage = initial => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return value ? JSON.parse(value) : initial;
    } catch (error) {
      console.warn(error);
      return initial;
    }
  });
  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };
  window.addEventListener('storage', function(e) {
    if (e.newValue !== e.oldValue) setValue(JSON.parse(e.newValue));
  });
  return [storedValue, setValue];
};

export default useLocalStorage;
