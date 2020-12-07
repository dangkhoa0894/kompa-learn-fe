export const parseError = (raw_error = '') => {
  const error =
    raw_error.graphQLErrors && raw_error.graphQLErrors.length > 0 && raw_error.graphQLErrors[0];
  return error;
};

export const getDataLocalStorage = (key) => {
  const tempData = localStorage.getItem(key);
  if (tempData) {
    return JSON.parse(tempData);
  }
  return null;
};

export const fileValidate = (file, type) => {
  const docVal = file.name;
  const extension = docVal.substring(docVal.lastIndexOf('.') + 1, docVal.length);
  let isSuccess = 0;
  type.forEach((element) => {
    if (extension.toLowerCase() === element) {
      isSuccess += 1;
    }
  });
  return Boolean(isSuccess);
};

export const debounce = (fn, time) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
