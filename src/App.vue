<template>
  <div>
    <ModalComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";


export default {
  name: "App",
  components: {

  },
};
</script>

<style>
.btn-primary {
  color: #0e1a50;
  background-color: #20e0cc;
  border-color: #20e0cc;
  font-weight: bold;
}

.btn-secondary {
  color: #FFFAF6;
  background-color: #0e1a50;
  border-color: unset;
  font-weight: bold;
}
</style>
