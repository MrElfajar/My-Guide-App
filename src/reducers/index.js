import {
  combineReducers
} from 'redux';
import menuToggleReducers from './menuToggleReducers';
import menuReducers from './menuReducers';
import quranReducers from './quranReducers';
import panduanReducers from './panduanReducers';
import perkataReducers from './perkataReducers';

const allReducers = combineReducers({
  navToggle: menuToggleReducers,
  menuList: menuReducers,
  quranList: quranReducers,
  panduanList: panduanReducers,
  perkataList: perkataReducers,
});

export default allReducers;