import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import './css/QuranPerkata.css';
import {
  surahToggle
} from '../action/index';

const QuranPerkata = () => {
  const dispatch = useDispatch();
  const quranList = useSelector(state => state.quranList.quranList);
  return (
    <div className="content pop">
        <div className="title">
          <h2>Al - Quran Perkata</h2>
    </div>
        <div className="isi">
        {
      quranList.sort((a, b) => a.id-b.id)
      .map(qList => <div key={qList.id} className="bg-smooth-blue" onClick={()=>dispatch(surahToggle('OPEN_SURAH', qList.id))}>
        {qList.id + ". " + qList.name}
      </div>
      )
      }
    </div>
    </div>
  );
}

export default QuranPerkata;