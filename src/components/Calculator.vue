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
              <label for="class">Choose a class</label>
              <select name="class" id="class">
                <option value=""></option>
                <option value="Jewel">1. osztály</option>
                <option value="True">2. osztály</option>
              </select>
              <label for="size">Choose a size</label>
              <select name="size" id="size">
                <option value=""></option>
                <option value="tiny">parányi</option>
                <option value="small">kicsi</option>
              </select>
              <label for="grinding">Choose a size</label>
              <select name="grinding" id="grinding">
                <option value=""></option>
                <option value="amateurish">Kontármunka</option>
                <option value="masterpiece">Mestermunka</option>
              </select>
              <button id="button" @click="submit">End</button>
            </form>
          </div>
          <div id="answear">
            <div id="answear-box">
              <ul>
                <li>1. osztály
                  <ul>
                    <li> kicsi
                      <ul>
                        <li>
                          kontármunka: xxx gp
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
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
    submit() {
      if (document.getElementById("answear").hasChildNodes()) {
        document.getElementById("answear-box").remove();
      }
      if (document.getElementById("gp").value == '' || document.getElementById("gp").value.isNaN) { //validation
        let element = document.createElement('div');
        element.id = "answear-box";
        element.innerHTML = 'Adjál meg pénzértéket'; //rephrase
        document.getElementById("answear").appendChild(element);
      } else {
        /*---------------------------------------------------------------------------------- Variables part ------------------------------------------------------------------------------------------------- */
        var gp = document.getElementById("gp").value;
        var classValue = this.getClass(document.getElementById("class").value);
        var sizeValue = this.getSize(document.getElementById("size").value);
        var grindingValue = this.getGrinding(document.getElementById("grinding").value);
        let element = document.createElement('div');

        /*---------------------------------------------------------------------------------- Calculating part ----------------------------------------------------------------------------------------------- */



        /*---------------------------------------------------------------------------------- Answear part --------------------------------------------------------------------------------------------------- */
        element.id = "answear-box";
        element.innerHTML = gp + " " + classValue + " " + sizeValue + " " + grindingValue;
        document.getElementById("answear").appendChild(element);
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

#answear-box {
  margin: 30%;
  margin-top: 25px;
  margin-bottom: 0px;
  text-align: left;
  border: 1px;
  border-style: solid;
  background-color: lightgray;
}
</style>
  
  