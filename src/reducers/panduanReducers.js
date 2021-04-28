const initialState = {
  show : false,
  active: 0,
  panduan: [
    {id:1,name:'Wudhu'},
    {id:2,name:'Shalat'},
    {id:3,name:'Mandi Junub'}]
};

const panduanReducers = (state = initialState,action) => {
  switch (action.type) {
    case 'CLOSE_PANDUAN':
      return {
        ...state,
        show : false
      };
    case 'OPEN_PANDUAN':
    return {
        ...state,
        show: true,
        active: action.payload
      };
    default:
      return state;
  }
};

export default panduanReducers;