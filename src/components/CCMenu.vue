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
          <div class="Tab" @click="this.$router.push('/calculator')">
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
        <div id="title">
          <h1>Bevezetés</h1>
        </div>
        <div id="text-box">
          Az ékkövek bányászata és feldolgozása a törpék ősi, hagyományos szakmái közé tartozik. Nincs törpe, kinek
          szívét ne töltené el lelkesedéssel egy tiszta hegyikristály, egy vérvörös rubin vagy egy égszínkék akvamarin
          csillogása. A Kőzúzó Klán célkitűzései közt az ékkő-bányászat és az ékszerkovácsolás a kezdetektől fogva
          előkelő helyet foglalt el. Az ékkövekkel való munkának alapvető feltétele azok pontos meghatározása és
          osztályozása. Az Ékszerészek Szakosztálya évtizedek óta ezzel az immár hat kiadást megélt könyvvel nyújt
          útmutatást munkatársai számára a fentiekhez.
          <div>
            <h2 id="subtitle">A Szerzőkről:</h2>
            <div>
              <h3 style="  display: inline-block;">Bronzhátú Thrakor</h3> kétszeres díjnyertes ékszerkovács, 10 éven
              keresztül az Ékszerészek Szakosztályának helyettes titkára.
            </div>
            <div>
              <h3 style="  display: inline-block;">Sziklatövi Humlin</h3> bányász, háromszoros élmunkás, az ékkövek
              kitermelésének kiváló szakértője.
            </div>
            <div>Nyomtatva az Igazság Veknijének 417. évében Királybányán.</div>
            <div>Hatodik, javított és bővített kiadás</div>
          </div>
          <div id="realAuthors">
            <div>Házi szabályrendszer a Dungeons & Dragons 5.0-s kiadásához</div>
            <div>Összeállította: Vincze Ernő, 2019.</div>
            <div>Univerzum: Gyöngyvilág, Drakonír szigetei; szerző és mesélő: Klucsik Krisztián Pál</div>
            <div>Inspiráció / referencia:</div>
            <div>https://forgottenrealms.fandom.com/wiki/Category:Gems</div>
            <div>https://olddungeonmaster.com/2012/06/10/gems/</div>
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

#subtitle {
  padding-top: 10px;
  text-align: left;
  font-family: Navarone;
  font-style: normal;
}

#text-box {
  padding-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: larger;
  font-weight: 400;
}

#realAuthors {
  margin: 30%;
  margin-top: 25px;
  margin-bottom: 0px;
  text-align: center;
  border: 1px;
  border-style: solid;
  background-color: lightgray;
}
</style>

