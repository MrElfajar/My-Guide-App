const initialState = [{
  id: 1,
  arab: [['بِسْمِ','اللّٰهِ','الرَّحْمٰنِ','الرَّحِيْمِ'],
    ['الْحَمْدُ','لِلّٰهِ','رَبِّ','الْعٰلَمِيْنَ'],
    [],
  ],
  text: [['Dengan nama','Allah','Maha Pengasih','Maha Penyayang'],
  ['pujian','bagi Allah','Tuhan','alam semesta']]
},
  {
    id: 2,
    arab: [[]],
    text: [[]]
  },
  {
    id: 0,
    arab: [[]],
    text: [[]]
  },
  {
    id: 0,
    arab: [[]],
    text: [[]]
  },
  {
    id: 0,
    arab: [[]],
    text: [[]]
  },
];


const perkataReducers = (state = initialState, action) => {
  return state;
};

export default perkataReducers;