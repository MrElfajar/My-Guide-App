import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  panduanToggle
} from '../action/index';
import Wudhu from './panduan/Wudhu';
import Shalat from './panduan/Shalat';
import MandiJunub from './panduan/MandiJunub';

const PanduanPop = () => {
  const dispatch = useDispatch();
  const panduanShow = useSelector(state => state.panduanList.show);
  const panduanList = useSelector(state => state.panduanList.panduan);
  const panduanId = useSelector(state => state.panduanList.active);
  const pdn = (panduanId) => {
    switch (panduanId) {
      case 1:
        return <Wudhu />
        case 2:
          return <Shalat />
          case 3:
            return <MandiJunub />
            default:
              return <div>
errno
              </div>
            }
        }
        return (
          <div className={"surahOuter pop " + (panduanShow ? 'show': 'hide')}>
      <div className="surah">
        <div className="header">
          <div className="surahTitle">
            {panduanList.map(list => list.id === panduanId && 'Panduan ' + list.name)}
          </div>
          <div className="closeBtn" onClick={()=>dispatch(panduanToggle('CLOSE_PANDUAN'))}>
X
          </div>
          </div>
        {pdn(panduanId)}
          </div>
          </div>
        )
    };

    export default PanduanPop;