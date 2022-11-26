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
            <div class="Tab" @click="this.$router.push('/')">
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
          <div id="title"><h1><!--Big title with special fonts--></h1></div>
          <div id="text-box">
            <!-- The main text, copy-d from the source document, has to be formated -->
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
  </style>
  
  