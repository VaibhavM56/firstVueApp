<template>
  <h1>This is my component</h1>
  <h2>Name is:{{ name }} {{ greeting }}</h2>
  <p>UserName is : {{ UserName }} rollNo.{{ rollNo }}</p>
</template>

<script>
export default {
  //   props: ["greeting", "UserName", "rollNo"],
  props: {
    greeting: {
      type: String,
      required: true,
    },
    UserName: {
      type: String,
    },
    rollNo: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      name: "Ajay",
    };
  },
};
</script>

<style></style>
