<template>
  <div>
    <h1>{{result}}</h1>
    <form v-on:submit="onSubmitForm">
      <input ref="answer" v-model="value" type="text" />
      <button>입력</button>
    </form>
    <div>시도: {{value}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      result: ""
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>