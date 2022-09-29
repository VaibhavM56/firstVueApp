<template>
  <h1>HELLO WORLD</h1>
  <!-- rendering MyComponent -->
  <!-- <my-component greeting="Good Morning" :UserName="UserName" :rollNo="40" /> -->
  <!-- sending function to child component use v-on OR @ -->

  <child-component @getDataFromChild="getDataFromChild" />

  <h3>Toy Data from child :{{ kidsToyData }}</h3>

  <base-card
    mobileName="MOTOROLA g82 5g(White Lily,128 GB) (6 GB RAM)"
    rating="4.1"
    mobilePrice="16500"
  />
  <base-card
    mobileName="SAMSUNG GALAXY F13(Nightsky Green,64GB) (4GB RAM)"
    rating="3.2"
    mobilePrice="8500"
  />
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";
import BaseCard from "./components/BaseCard.vue";
// import MyComponent from "./components/MyComponent.vue";
export default {
  name: "App",
  components: {
    ChildComponent,
    BaseCard,
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
