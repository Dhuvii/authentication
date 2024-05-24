const useLocalStorage = () => {
  function setStorage(key: string, value: any) {
    localStorage.setItem(`${__TOKEN_PREFIX__}_${key}`, JSON.stringify(value));
  }

  function getStorage(key: string) {
    const val = localStorage.getItem(`${__TOKEN_PREFIX__}_${key}`) ?? null;

    if (val) {
      return JSON.parse(val);
    }
    return val;
  }

  function removeStorage(key: string) {
    localStorage.removeItem(`${__TOKEN_PREFIX__}_${key}`);
  }

  return { setStorage, getStorage, removeStorage };
};

export default useLocalStorage;
