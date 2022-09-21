<template>
  <h1>Hi I'm Child Component</h1>
  <button @click="handleClick">Send data to parent</button>
</template>

<script>
export default {
  emits: ["getDataFromChild"],
  data() {
    return {
      toyInfo: "red toy car",
    };
  },
  methods: {
    handleClick() {
      // console.log("handleClick executed");
      this.$emit("getDataFromChild", this.toyInfo);
    },
  },
};
</script>

<style></style>
