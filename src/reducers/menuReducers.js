const initialState = [{
  id: 1,
  name: 'Home',
  active: true
},
  {
    id: 2,
    name: 'Panduan',
    active: false
  },
  {
    id: 3,
    name: 'Al - Quran Perkata',
    active: false
  },
  {
    id: 4,
    name: 'Tajwid',
    active: false
  },
  {
    id: 5,
    name: 'Asmaul Husna',
    active: false
  }];

const menuReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_CLICK':
      return (
        state = state.map(menu=> {
          if (action.payload === menu.id) {
            return {
              ...menu,
              active: true
            };
          } else if (action.payload !== menu.id) {
            return {
              ...menu,
              active: false
            }
          } else {
            return menu;
          }
        })
      )
      default:
        return state;
      }
  };

  export default menuReducers;