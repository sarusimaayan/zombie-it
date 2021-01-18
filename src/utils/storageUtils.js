const save = (key, value) => {
  localStorage.setItem(key, value);
}

const get = (key) => {
  return localStorage.getItem(key);
}

const Storage = {
  save,
  get,
};

export default Storage;
