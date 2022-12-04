import { createStore } from "vuex";

const store = createStore({
  state: {
      size: { //values mean the multiplier of the price described in the class
        Tiny: 0.1,
        Small: 1,
        Medium: 10,
        Big: 100,
        Giant: 970,
        Gigantic: 9700
      },
      sizeHun: {
        0.1: 'parányi',
        1: 'kiss',
        10: 'közepes',
        100: 'nagy',
        970: 'óriás',
        9700: 'kolosszális'
      },
      class: { //Values mean the price in gp, for a small regular gem
        Jewel: 5000,
        True: 1000,
        Precious: 500,
        Fancy: 100,
        SemiPrecious: 50,
        Ornamental: 10,
      },
      classHun: {
        5000: '1. osztály',
        1000: '2. osztály',
        500: '3. osztály',
        100: '4. osztály',
        50: '5. osztály',
        10: '6. osztály',
      },
      grinding: {
        amateurish: 0.1,
        imperfect: 0.5,
        regular: 1,
        perfect: 2,
        masterpiece: 5
      },
      grindingHun: { //values mean the multiplier of the price described in the class
        0.1: 'kontárosan',
        0.5: 'tökéletlenűl',
        1: 'szabályosan',
        2: 'kiválóan',
        5: 'mesterien'
      },
      color: { //values mean the gems in a specified color
        Red1: [],
        Red2: ["rubin"],
        Red3: [],
        Red4: ["gránát", "nemeskorall", "spinell", "turmalin"],
        Red5: ["jáspis", "karneol", "szárdónix"],
        Red6: ["sávos achát"],
        Orange1: ["jácint"],
        Orange2: [],
        Orange3: ["topáz"],
        Orange4: [],
        Orange5: ["cirkon"],
        Orange6: [],
        Yellow1: ["kanári gyémánt"],
        Yellow2: ["korund"],
        Yellow3: ["topáz"],
        Yellow4: ["borostyán", "igazgyöngy", "gránát"],
        Yellow5: ["cirkon"],
        Yellow6: ["tigrisszem"],
        Green1: [],
        Green2: ["smaragd"],
        Green3: ["alexandrit", "krizolit"],
        Green4: ["jáde", "gránát", "spinell", "turmalin"],
        Green5: ["krizoprász", "cirkon"],
        Green6: ["mohaachát", "malachit"],
        Blue1: ["gyémánt"],
        Blue2: ["zafír"],
        Blue3: ["akvamarin", "kék spinell", "topáz"],
        Blue4: ["gránát"],
        Blue5: ["holdkő", "kék kvarc"],
        Blue6: ["lazúr kő", "sávos achát", "türkiz"],
        Purple1: [],
        Purple2: ["zafír"],
        Purple3: ["alexandit", "topáz"],
        Purple4: ["ametiszt", "gránát"],
        Purple5: [],
        Purple6: [],
        Pink1: ["gyémánt"],
        Pink2: [],
        Pink3: [],
        Pink4: ["igazgyöngy"],
        Pink5: ["rózsakvarc", "cirkon"],
        Pink6: ["rodokrozit"],
        Black1: ["gyémánt"],
        Black2: [],
        Black3: ["fekete gyöngy"],
        Black4: [],
        Black5: ["füstös kvarc", "obszidián"],
        Black6: ["ónix", "hermatit"],
        Gray1: [],
        Gray2: ["opál"],
        Gray3: [],
        Gray4: [],
        Gray5: ["füstös kvarc", "heliotróp"],
        Gray6: [],
        White1: [],
        White2: [],
        White3: [],
        White4: ["igazgyöngy"],
        White5: ["cirkon"],
        White6: ["folyami gyöngy", "sávos achát"],
        Colorless1: ["gyémánt"],
        Colorless2: [],
        Colorless3: [],
        Colorless4: [],
        Colorless5: ["hegyikristály"],
        Colorless6: []
    }
  },
  mutations: {
    setSomeState(state, modifer) {
      state.someState += modifer;
    }
  },
  getters: {
    someState(state) {
      return state.someState;
    },
    getSize: (state) => (variable) => {
      return state.size[variable];
    },
    getClass: (state) => (variable) => {
      return state.class[variable];
    },
    getGrinding: (state) => (variable) => {
      return state.grinding[variable];
    },
    getColor: (state) => (variable) => {
      return state.color[variable];
    },
    getClassHun: (state) => (variable) => {
      return state.classHun[variable];
    },
    getSizeHun: (state) => (variable) => {
      return state.sizeHun[variable];
    },
    getGrindingHun: (state) => (variable) => {
      return state.grindingHun[variable];
    },
  }
});

export default store;
