export const navToggle = (data) => {
  return {
    type: 'NAV_SHOW'
  };
};

export const menuAction = (id) => {
  return {
    type: 'MENU_CLICK',
    payload: id
  };
};

export const surahToggle = (type, id) => {
  return {
    type: type,
    payload: id
  };
};
export const panduanToggle = (type, id) => {
  return {
    type: type,
    payload: id
  };
};