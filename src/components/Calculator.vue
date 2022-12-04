<template>
  <div class="CCMenu">
    <div id="parent1">
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
                  <label for="JewelGiganticPerfect">1. osztályú gigantikus perfect - xxx GP</label>
                  <input class="CheckBox" id="JewelGiganticPerfect" type="checkbox" style="" />
                  <div class="popup"> <!--id = class+size+grinding-->
                    <ul>
                      <li>Narancs: Jácint</li>
                      <li>Kék: Gyémánt</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <label for="JewelGiganticmesterpiece">1. osztályú gigantikus mestermunka - xxx GP</label>
                  <input class="CheckBox" id="JewelGiganticmesterpiece" type="checkbox" style="" />
                  <div class="popup"> <!--id = class+size+grinding-->
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
                <option value="Precious">3. osztály</option>
                <option value="Fancy">4. osztály</option>
                <option value="SemiPrecious">5. osztály</option>
                <option value="Ornamental">6. osztály</option>
              </select>
              <label for="size">Válasz méretet</label>
              <select name="size" id="size">
                <option value="Tiny">Parányi (0.25 karát)</option>
                <option value="Small">Kicsi (2 karát)</option>
                <option value="Medium">Közepes (16 karát)</option>
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

    <!-- <div id="parent">
      This is the main container.
      <div id="popup">some text here</div>
    </div> -->
  </div>
</template>
  
<script>
// function hideShowfunction(id) {
//   let element = document.getElementById(id);
//   if (element.style.display == "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }


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
    getColor(param) {
      return this.$store.getters.getColor(param);
    },
    submitGold() {
      if (document.getElementById("GPanswear").hasChildNodes()) {
        document.getElementById("GPanswear-box").remove();
      }
      if (document.getElementById("gp").value == '' || document.getElementById("gp").value.isNaN || document.getElementById("gp").value < 0) { //validation
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

        let classes = ["Jewel", "True", "Precious", "Fancy", "SemiPrecious", "Ornamental"];
        let sizes = ["Gigantic", "Giant", "Big", "Medium", "Small", "Tiny"];
        let grindings = ["masterpiece", "perfect", "regular", "imperfect", "amateurish"];
        let payable = [];

        classes.forEach(className => {
          var classWorth = this.getClass(className);
          sizes.forEach(sizeName => {
            var sizeWorth = this.getSize(sizeName);
            grindings.forEach(grindingName => {
              var grindWorth = this.getGrinding(grindingName);
              if (classWorth * sizeWorth * grindWorth <= gp) {
                payable.push(className + "," + sizeName + "," + grindingName);
              }
            });
          });
        });

        /*---------------------------------------------------------------------------------- Answear part --------------------------------------------------------------------------------------------------- */
        element.id = "GPanswear-box";
        element.className = "answear-box";
        let payableStrings = [];
        payable.forEach(gem => {
          var className = this.getClassHun(this.getClass(gem.split(",")[0]));
          var sizeName = this.getSizeHun(this.getSize(gem.split(",")[1]));
          var grindingName = this.getGrindingHun(this.getGrinding(gem.split(",")[2]));
          var cost = this.getClass(gem.split(",")[0]) * this.getSize(gem.split(",")[1]) * this.getGrinding(gem.split(",")[2]);
          let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Gray", "White", "Colorless"];
          let listItems = [];
          colors.forEach(color => {
            if (this.getColor(color + className.split(".")[0]).length != 0) {
              listItems.push('<li>' + color + ': ' + this.getColor(color + className.split(".")[0]).join(', ') + '</li>');
            } else {
              return;
            }
          });
          payableStrings.push(//hideShowfunction('${gem.split(",")[0] + gem.split(",")[1] + gem.split(",")[2]}')
            `<div>
              <label for="${gem.split(",")[0] + gem.split(",")[1] + gem.split(",")[2]}"> ${className}ú ${sizeName} méretű drágakő ${grindingName} megcsiszolva - ${cost} GP <span class="dropdownButton">v</span></label>
              <input hidden class="CheckBox" id="${gem.split(",")[0] + gem.split(",")[1] + gem.split(",")[2]}" type="checkbox" />
              <div class="popup">
                <ul>
                  ${listItems.join('')} 
                </ul>
              </div>
            </div>`);
        });
        element.innerHTML = payableStrings.join("");
        document.getElementById("GPanswear").appendChild(element);
        this.$forceUpdate();
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
      element.innerHTML = '<div>' + this.getClassHun(classValue) + 'ú ' + this.getSizeHun(sizeValue) + ' méretű drágakő ' + this.getGrindingHun(grindingValue) + ' megcsiszolva - ' + cost + ' GP' + '</div>';
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

/* label {
  padding-left: 10px;
  padding-right: 10px;
} */

.submitButton {
  background-color: gray;
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

.dropdownButton {
  background-color: gray;
  border: none;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  border-radius: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
.dropdownButton:hover {
  background-color: lightslategray;
}

.popup {
  display: none;
}

.CheckBox:checked+.popup {
  display: block;
}
</style>
  
  