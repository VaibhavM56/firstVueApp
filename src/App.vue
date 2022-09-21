<template>
  <h1>HELLO WORLD</h1>
  <!-- rendering MyComponent -->
  <!-- <my-component greeting="Good Morning" :UserName="UserName" :rollNo="40" /> -->
  <!-- sending function to child component use v-on OR @ -->

  <child-component @getDataFromChild="getDataFromChild" />

  <h3>Toy Data from child :{{ kidsToyData }}</h3>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";
// import MyComponent from "./components/MyComponent.vue";
export default {
  name: "App",
  components: {
    ChildComponent,
    // MyComponent,
  },
  data() {
    return {
      UserName: "Raju Rastogi",
      kidsToyData: "",
    };
  },
  methods: {
    // chocholate function
    // 1 . In parent component Create a function and pass it to child component
    // 2 . Call that function in child component and pass the data inside that function

    getDataFromChild(childData) {
      console.log("chocolate function executed", childData);
      this.kidsToyData = childData;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
