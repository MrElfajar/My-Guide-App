const initialState = {
  show: false,
  active: 114,
  quranList: [{
    id: 114,
    name: 'An - Naas',
    ayat: 6,
    active: false
  },
    {
      id: 113,
      name: 'Al - Falaq',
      ayat: 5,
      active: false
    },
    {
      id: 112,
      name: 'Al - Ikhlas',
      ayat: 4,
      active: false
    },
    {
      id: 111,
      name: 'Al - Lahab',
      ayat: 5,
      active: false
    },
    {
      id: 110,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 109,
      name: 'Al - Kafirun',
      ayat: 6,
      active: false
    },
    {
      id: 108,
      name: 'Al - Kautsar',
      ayat: 3,
      active: false
    },
    {
      id: 107,
      name: "Al - Ma'un",
      ayat: 7,
      active: false
    },
    {
      id: 106,
      name: 'Qiraisy',
      ayat: 4,
      active: false
    },
    {
      id: 105,
      name: 'Al - Fiil',
      ayat: 5,
      active: false
    },
    {
      id: 104,
      name: 'Al - Humazah',
      ayat: 9,
      active: false
    },
    {
      id: 103,
      name: "Al - 'Asr",
      ayat: 3,
      active: false
    },
    {
      id: 102,
      name: 'At - Takatsur',
      ayat: 8,
      active: false
    },
    {
      id: 101,
      name: "Al - Qari'ah",
      ayat: 22,
      active: false
    },
    {
      id: 100,
      name: "Al - Adiyat",
      ayat: 11,
      active: false
    },
    {
      id: 99,
      name: 'Az - Zalzalah',
      ayat: 8,
      active: false
    },
    {
      id: 98,
      name: 'Al - Bayyinah',
      ayat: 8,
      active: false
    },
    {
      id: 97,
      name: 'Al - Qadr',
      ayat: 5,
      active: false
    },
    {
      id: 96,
      name: "Al - 'Alaq",
      ayat: 19,
      active: false
    },
    {
      id: 95,
      name: 'AT - Tiin',
      ayat: 8,
      active: false
    },
    {
      id: 94,
      name: 'Al - Insyirah',
      ayat: 8,
      active: false
    },
    {
      id: 93,
      name: 'Ad - Dhuha',
      ayat: 11,
      active: false
    },
    {
      id: 92,
      name: 'Al - Lail',
      ayat: 21,
      active: false
    },
    {
      id: 91,
      name: 'Asy - Syams',
      ayat: 15,
      active: false
    },
    {
      id: 90,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 89,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 88,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 87,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 86,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 85,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 84,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 83,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 82,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 81,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 80,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 79,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 78,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 77,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 76,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 75,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 74,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 73,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 72,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 71,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 70,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 69,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 68,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 67,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 66,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 65,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 64,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 63,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 62,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 61,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 60,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 59,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 58,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 57,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 56,
      name: 'Al - Nasr',
      ayat: 3,
      active: false
    },
    {
      id: 55,
      name: 'Ar - Rahman',
      ayat: 78,
      active: false
    },
    {
      id: 54,
      name: 'Al - Qamar',
      ayat: 55,
      active: false
    },
    {
      id: 53,
      name: 'An - Najm',
      ayat: 62,
      active: false
    },
    {
      id: 52,
      name: 'At - Thuur',
      ayat: 49,
      active: false
    },
    {
      id: 51,
      name: 'Adz - Dzariyat',
      ayat: 60,
      active: false
    },
    {
      id: 50,
      name: 'Qaf',
      ayat: 45,
      active: false
    },
    {
      id: 49,
      name: 'Al - Hujurat',
      ayat: 18,
      active: false
    },
    {
      id: 48,
      name: 'Al - Fath',
      ayat: 29,
      active: false
    },
    {
      id: 47,
      name: 'Muhammad',
      ayat: 38,
      active: false
    },
    {
      id: 46,
      name: 'Al - Ahqaf',
      ayat: 35,
      active: false
    },
    {
      id: 45,
      name: 'Al - Jatsiyah',
      ayat: 37,
      active: false
    },
    {
      id: 44,
      name: 'Ad - Dukhan',
      ayat: 59,
      active: false
    },
    {
      id: 43,
      name: 'Az - Zukhruf',
      ayat: 89,
      active: false
    },
    {
      id: 42,
      name: 'As - Syura',
      ayat: 53,
      active: false
    },
    {
      id: 41,
      name: 'Fusshilat',
      ayat: 54,
      active: false
    },
    {
      id: 40,
      name: 'Ghafir',
      ayat: 85,
      active: false
    },
    {
      id: 39,
      name: 'Az - Zumar',
      ayat: 75,
      active: false
    },
    {
      id: 38,
      name: 'Shad',
      ayat: 88,
      active: false
    },
    {
      id: 37,
      name: 'As - Shaffat',
      ayat: 182,
      active: false
    },
    {
      id: 36,
      name: 'Ya-Sin',
      ayat: 83,
      active: false
    },
    {
      id: 35,
      name: 'Fatir',
      ayat: 45,
      active: false
    },
    {
      id: 34,
      name: "Saba'",
      ayat: 54,
      active: false
    },
    {
      id: 33,
      name: 'Al - Ahzab',
      ayat: 73,
      active: false
    },
    {
      id: 32,
      name: 'As - Sajdah',
      ayat: 30,
      active: false
    },
    {
      id: 31,
      name: 'Luqman',
      ayat: 34,
      active: false
    },
    {
      id: 30,
      name: 'Ar - Ruum',
      ayat: 60,
      active: false
    },
    {
      id: 29,
      name: "Al - 'Ankabut",
      ayat: 69,
      active: false
    },
    {
      id: 28,
      name: 'Al - Qashash',
      ayat: 88,
      active: false
    },
    {
      id: 27,
      name: 'An - Naml',
      ayat: 93,
      active: false
    },
    {
      id: 26,
      name: "Asy - Syu'ara'",
      ayat: 227,
      active: false
    },
    {
      id: 25,
      name: 'Al - Furqan',
      ayat: 77,
      active: false
    },
    {
      id: 24,
      name: 'An - Nur',
      ayat: 64,
      active: false
    },
    {
      id: 23,
      name: "Al - Mu'minun",
      ayat: 118,
      active: false
    },
    {
      id: 22,
      name: 'Al - Hajj',
      ayat: 78,
      active: false
    },
    {
      id: 21,
      name: 'Al - Anbiya',
      ayat: 112,
      active: false
    },
    {
      id: 20,
      name: 'Ta-Ha',
      ayat: 135,
      active: false
    },
    {
      id: 19,
      name: 'Maryam',
      ayat: 98,
      active: false
    },
    {
      id: 18,
      name: 'Al - Kahf',
      ayat: 110,
      active: false
    },
    {
      id: 17,
      name: "Al - Isra'",
      ayat: 111,
      active: false
    },
    {
      id: 16,
      name: 'An - Nahl',
      ayat: 128,
      active: false
    },
    {
      id: 15,
      name: 'Al - Hijr',
      ayat: 99,
      active: false
    },
    {
      id: 14,
      name: 'Ibrahim',
      ayat: 52,
      active: false
    },
    {
      id: 13,
      name: "Ar - Ra'd",
      ayat: 43,
      active: false
    },
    {
      id: 12,
      name: 'Yusuf',
      ayat: 111,
      active: false
    },
    {
      id: 11,
      name: 'Hud',
      ayat: 123,
      active: false
    },
    {
      id: 10,
      name: 'Yunus',
      ayat: 109,
      active: false
    },
    {
      id: 9,
      name: 'At - Taubah',
      ayat: 129,
      active: false
    },
    {
      id: 8,
      name: 'Al - Anfal',
      ayat: 75,
      active: false
    },
    {
      id: 7,
      name: "Al - A'raf",
      ayat: 206,
      active: false
    },
    {
      id: 6,
      name: "Al - An'am",
      ayat: 165,
      active: false
    },
    {
      id: 5,
      name: "Al - Ma'idah",
      ayat: 120,
      active: false
    },
    {
      id: 4,
      name: "An - Nisa'",
      ayat: 176,
      active: false
    },
    {
      id: 3,
      name: "Al - 'Imran",
      ayat: 200,
      active: false
    },
    {
      id: 2,
      name: 'Al - Baqarah',
      ayat: 286,
      active: false
    },
    {
      id: 1,
      name: 'Al - Fatihah',
      ayat: 7,
      active: false
    },
  ]
};

const quranReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_SURAH':
      return {
        ...state,
        show: false
      };
      case 'OPEN_SURAH':
        return {
          ...state,
          show: true,
          active: action.payload
        };

        default:
          return state;
        }
    };

    export default quranReducers;