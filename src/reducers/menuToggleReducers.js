const menuToggleReducers = (state = false, action) => {
  switch (action.type) {
    case 'NAV_SHOW':
      return !state;
      default:
        return state;
      }
  };

  export default menuToggleReducers;