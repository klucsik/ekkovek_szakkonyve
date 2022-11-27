import { createStore } from "vuex";

const store = createStore({
  state: {
      size: { //values mean the multiplier of the price described in the class
        tiny: 0.1,
        small: 1,
        medium: 10,
        Big: 100,
        Giant: 970,
        Gigantic: 9700
      },
      class: { //Values mean the price in gp, for a small regular gem
        Jewel: 5000,
        True: 1000,
        Precious: 500,
        Fancy: 100,
        SemiPrecious: 50,
        Ornamental: 10,
      },
      grinding: { //values mean the multiplier of the price described in the class
        amateurish: 0.2,
        imperfect: 0.5,
        regular: 1,
        perfect: 2,
        masterpiece: 5
      },
      color: { //values mean the gems in a specified color
        red1: [],
        red2: ["rubin"],
        red3: [],
        red4: ["gránát", "nemeskorall", "spinell", "turmalin"],
        red5: ["jáspis", "karneol", "szárdónix"],
        red6: ["sávos achát"],
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
        Szürke1: [],
        Szürke2: ["opál"],
        Szürke3: [],
        Szürke4: [],
        Szürke5: ["füstös kvarc", "heliotróp"],
        Szürke6: [],
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
  }
});

export default store;
