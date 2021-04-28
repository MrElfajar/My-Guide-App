import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  surahToggle
} from '../action/index';
import './css/surah.css';


const SurahPerkata = () => {
  const dispatch = useDispatch();
  const surahShow = useSelector(state => state.quranList.show);
  const quranList = useSelector(state => state.quranList.quranList);
  const perkataList = useSelector(state => state.perkataList);
  const surahId = useSelector(state => state.quranList.active);
  return (
    <div className={"surahOuter pop " + (surahShow ? 'show': 'hide')}>
      <div className="surah">
        <div className="header">
          <div className="surahTitle">
            {quranList.map(list => list.id === surahId && list.name)}
    </div>
          <div className="closeBtn" onClick={()=>dispatch(surahToggle('CLOSE_SURAH'))}>
X
    </div>
    </div>
            <div className="surahContent">
              {perkataList.map(list => {
        if (list.id === surahId) {
          return(
            list.text.map((ltext, index)=> {
              return (
                <div className="row">
                          {ltext.map((lt, idx)=> {
                  return(
                    <div className="col">
                                <div className="arab">
                      {list.arab[index][idx]}
                    </div>
                                <div className="text">
                      {lt}
                    </div>
                    </div>
                  )
                })}
                </div>
              )
            })
          )
        }
      })}
    </div>
    </div>
    </div>
  )
};

export default SurahPerkata;