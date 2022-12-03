<template>
  <div class="CCMenu">
    <div id="parent">
      <!-- <h3 id="Title">Test: Ékkövek könyve</h3> -->
      <!-- <button @click="setSomeState">Set someState</button> -->
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
          <h1>Kalkulátor</h1>
        </div>
        <div id="text-box">
          A kalkulátor segitségével könnyen megnézheted hogy milyen ékköveket szeretnél!
          <div>
            <form>
              <label for="gp">Gold:</label>
              <input type="number" id="gp">
              <button class="submitButton" type="button" @click="submitGold">Calclulate</button>
            </form>
            <div id="GPanswear">
              <div class="answear-box" id="GPanswear-box">
                <div>
                  <span>1. osztályú gigantikus mestermunka - xxx GP <button type="button" @click="hideShow('JewelGiganticmasterpiece')">v</button></span>
                  <div id="JewelGiganticmasterpiece" style="display: none;"> <!--id = class+size+grinding-->
                    <ul>
                      <li>Narancs: Jácint</li>
                      <li>Kék: Gyémánt</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <span>1. osztályú gigantikus tökéletes munka - xxx GP <button type="button" @click="hideShow('JewelGiganticperfect')">v</button></span>
                  <div id="JewelGiganticperfect" style="display: none;">
                    <ul>
                      <li>Narancs: Jácint</li>
                      <li>Kék: Gyémánt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <label for="class">Válasz osztályt</label>
              <select name="class" id="class">
                <option value="Jewel">1. osztály</option>
                <option value="True">2. osztály</option>
                <option value="Precios">3. osztály</option>
                <option value="Fancy">4. osztály</option>
                <option value="SemiPrecious">5. osztály</option>
                <option value="Ornamental">6. osztály</option>
              </select>
              <label for="size">Válasz méretet</label>
              <select name="size" id="size">
                <option value="tiny">Parányi (0.25 karát)</option>
                <option value="small">Kicsi (2 karát)</option>
                <option value="medium">Közepes (16 karát)</option>
                <option value="Big">Nagy (128 karát)</option>
                <option value="Giant">Óriás (1000 karát)</option>
                <option value="Gigantic">Kolosszális (8000 karát)</option>
              </select>
              <label for="grinding">Válasz csiszolást</label>
              <select name="grinding" id="grinding">
                <option value="amateurish">Kontármunka</option>
                <option value="imperfect">Tökéletlen munka</option>
                <option value="regular">Szabályos munka</option>
                <option value="perfect">Kiváló munka</option>
                <option value="masterpiece">Mestermunka</option>
              </select>
              <button class="submitButton" type="button" @click="submitElse">Calculate</button>
            </form>
            <div id="elseAnswear">
            </div>
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
    // getClass() {
    //   return this.$store.getters.getClass('Jewel');
    // }
  },
  methods: {
    // setSomeState() {
    //   this.$store.commit('setSomeState', 1)
    // }
    getClass(param) {
      return this.$store.getters.getClass(param);
    },
    getSize(param) {
      return this.$store.getters.getSize(param);
    },
    getGrinding(param) {
      return this.$store.getters.getGrinding(param);
    },
    getClassHun(param) {
      return this.$store.getters.getClassHun(param);
    },
    getSizeHun(param) {
      return this.$store.getters.getSizeHun(param);
    },
    getGrindingHun(param) {
      return this.$store.getters.getGrindingHun(param);
    },
    submitGold() {
      if (document.getElementById("GPanswear").hasChildNodes()) {
        document.getElementById("GPanswear-box").remove();
      }
      if (document.getElementById("gp").value == '' || document.getElementById("gp").value.isNaN) { //validation
        let element = document.createElement('div');
        element.id = "GPanswear-box";
        element.className = "answear-box";
        element.innerHTML = 'Adjál meg pénzértéket'; //rephrase
        document.getElementById("GPanswear").appendChild(element);
      } else {
        /*---------------------------------------------------------------------------------- Variables part ------------------------------------------------------------------------------------------------- */
        var gp = document.getElementById("gp").value;
        let element = document.createElement('div');
        /*---------------------------------------------------------------------------------- Calculating part ----------------------------------------------------------------------------------------------- */



        /*---------------------------------------------------------------------------------- Answear part --------------------------------------------------------------------------------------------------- */
        element.id = "GPanswear-box";
        element.className = "answear-box";
        element.innerHTML = gp;
        document.getElementById("GPanswear").appendChild(element);
      }
    },
    submitElse() {
      if (document.getElementById("elseAnswear").hasChildNodes()) {
        document.getElementById("elseAnswear-box").remove();
      }
        /*---------------------------------------------------------------------------------- Variables part ------------------------------------------------------------------------------------------------- */
        var classValue = this.getClass(document.getElementById("class").value);
        var sizeValue = this.getSize(document.getElementById("size").value);
        var grindingValue = this.getGrinding(document.getElementById("grinding").value);
        let element = document.createElement('div');
        let cost = 0;

        /*---------------------------------------------------------------------------------- Calculating part ----------------------------------------------------------------------------------------------- */

        cost = classValue * sizeValue * grindingValue;

        /*---------------------------------------------------------------------------------- Answear part --------------------------------------------------------------------------------------------------- */
        element.id = "elseAnswear-box";
        element.className = "answear-box";
        element.innerHTML = '<div>' + this.getClassHun(classValue) + 'ú ' + this.getSizeHun(sizeValue) + ' méretű ' + this.getGrindingHun(grindingValue) + ' megcsiszolva - ' + cost + ' GP' + '</div>';
        document.getElementById("elseAnswear").appendChild(element);
    },
    hideShow(id) {
      let element = document.getElementById(id);
      if (element.style.display == "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
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

.answear-box {
  padding-left: 10px;
  margin: 30%;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: left;
  border: 1px;
  border-style: solid;
  background-color: lightgray;
}
label {
  padding-left: 10px;
  padding-right: 10px;
}
.submitButton {
  background-color: gray; /* Green */
  border: none;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 12px;
}
</style>
  
  