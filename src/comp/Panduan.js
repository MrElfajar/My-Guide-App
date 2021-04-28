import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  panduanToggle
} from '../action/index';

const Panduan = ({
  title
}) => {
  const dispatch = useDispatch();
  const panduanList = useSelector(state => state.panduanList.panduan);
  return (
    <div className="content pop">
        <div className="title">
          <h2>{title}</h2>
    </div>
        <div className="isi">
        {panduanList.map(list =>
        <div key={list.id} className="bg-smooth-blue" onClick={()=>dispatch(panduanToggle('OPEN_PANDUAN', list.id))}>
          {list.name}
        </div>
      )}
    </div>
    </div>
  );
}

export default Panduan;