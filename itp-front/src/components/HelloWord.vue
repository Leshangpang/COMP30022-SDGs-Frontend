<!-- HelloWorld.vue -->
<template>
    <div>
      <p>{{ msg }}</p>
      <button @click="increment">Click me</button>
      <p>{{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      msg: String
    },
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
  </script>
  