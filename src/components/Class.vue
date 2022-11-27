<template>
    <div class="CCMenu">
      <div id="parent">
        <!-- <h3 id="Title">Test: Ékkövek könyve</h3>
        <div>{{getState}}</div>
        <button @click="setSomeState">Set someState</button> -->
        <div id="header">
          <!-- All the pictures here -->
          <div id="tabs">
            <!-- Tabs here -->
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Home</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Kalkulátor</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/class')">
              <h5 class="TabTitle">Osztályozás</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Méret és súly</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Keménység</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Színek</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Csiszolás</h5>
            </div>
            <div class="Tab" @click="this.$router.push('/')">
              <h5 class="TabTitle">Ékkövek</h5>
            </div>
          </div>
        </div>
        <div id="main">
          <div id="title"><h1>Osztályozás</h1></div>
          <div id="text-box">
            <div style="font-style: italic;">Ahogy a régi időkben a törpe-társadalom osztályokba szerveződött, úgy a régi idők ékszerészei az ékköveket is osztályokba sorolták. Habár a Kőzúzó Klán az osztálykülönbségeket törpe és törpe közt végképp eltörölte, ezt az elvet az ékkövek esetében nem alkalmazzuk.</div>
            <div style="padding-top: 24px">Az ékkövek osztályai 1-től 6-ig terjednek, az 1. osztályú a legértékesebb, a 6. osztályú a legkevésbé értékes. Egy 1. osztályú drágakő egy vele azonos tömegű 6. osztályú ékkő 500-szorosát, egy 2. osztályú a 100-szorosát, 3. osztályú az 50-szeresét, 4. osztályú a 10-szereség, 5. osztályú az 5-szörösét éri.</div>
            <div>A felsőbb osztályba sorolt ékkövek jellemzően ritkábbak, keményebbek, tisztább színűek, átlátszóbbak, és nagyobb mágikus erővel bírnak, mint az alsóbb osztályokba soroltak. Ez alól vannak kivételek, pl. az opál viszonylag puha és kevéssé átlátszó, ám ritkasága és a benne található különleges zárványok miatt mégis a 2. osztályba sorolandó.</div>
            <div>Az alábbi értékek 1 db standard 2 karátos, szabályosan csiszolt ékkőre vonatkoznak:</div>
            <div style="padding-left: 24px">1. <b>osztály (ritka drágakövek, 5000 arany):</b> gyémánt, jácint</div>
            <div style="padding-left: 24px">2. <b>osztály (gyakori drágakövek, 1000 arany):</b> orund, opál, rubin, smaragd, zafír</div>
            <!-- <div style="padding-left: 24px">1. <b></b> </div> -->
            <div style="padding-left: 24px">3. <b>osztály (ritka féldrágakövek, 500 arany):</b> alexandrit, akvamarin, topáz, kék spinell, krizolit, fekete gyöngy</div>
            <div style="padding-left: 24px">4. <b>osztály (gyakori féldrágakövek, 100 arany):</b> ametiszt, borostyán, gránát, igazgyöngy, jáde, nemeskorall, spinell, turmalin</div>
            <div style="padding-left: 24px">5. <b>osztály (ritka ékkövek, 50 arany):</b> cirkon, citrin, füstös kvarc, hegyikristály, heliotróp, holdkő, iolit, jáspis, karneol, krizopráz, ónix, rózsakvarc, szárdónix</div>
            <div style="padding-left: 24px">6. <b>osztály (gyakori ékkövek, 10 arany):</b> achát, azurit, folyami gyöngy, hematit, kék kvarc, lazúrkő, malachit, obszidián, rodokrozit, tigrisszem, türkiz</div>
            <div id="ClassEnglish">
              <div>Az osztályok megnevezése angolul: 1. Jewel stone; 2. True gemstone; 3. Precious stone; 4. Fancy stone; 5. Semi-precious stone; 6. Ornamental stone.</div>
              <div>A magyar nyelv szókincse ebből a szempontból kevésbé változatos.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'CCMenu',
    components: {
  
    },
    computed: {
      // getState() {
      //   return this.$store.getters.someState;
      // }
    },
    methods: {
      // setSomeState() {
      //   this.$store.commit('setSomeState', 1)
      // }
    }
  }
  </script>
  
  <style>
  
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
  
    14% {
      transform: scale(1.3);
    }
  
    28% {
      transform: scale(1);
    }
  }
  @font-face {
    font-family: Navarone;
    src: url(../../Fonts/Navarone-Regular.woff);
  }
  
  #parent {
    width: 100%;
    height: 100%;
  }
  #header {
    width: 100%;
    height: 250px;
  }
  #tabs {
    padding-top: 217px;
  }
  .Tab {
    display: inline-block;
    margin-left: 5px;
    width: 150px;
    border-color: black;
    border-width: 1px;
    border-bottom: 0px;
    border-style: solid;
    text-align: center;
  }
  .TabTitle:hover {
    animation-name: heartBeat;
    animation-duration: 1s;
  }
  #title {
    text-align: center;
    font-family: Navarone;
  }
  #text-box {
    padding-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
    font-style: normal;
    font-size: larger;
    font-weight: 400;
  }
  #ClassEnglish {
  margin: 25%;
  margin-top: 25px;
  margin-bottom: 0px;
  text-align: left;
  border: 1px;
  border-style: solid;
  background-color: lightgray;
  padding-left: 5px;
}
  </style>
  
  