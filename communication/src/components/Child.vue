<template>
  <div>
    <p>child msg : {{ msg }}</p>
    Child title : {{ title }}
    <button @click="toParent">to parent</button>
    <button @click="getParent">get parent</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      name: "child",
      msg: "child msg",
    };
  },
  methods: {
    toParent() {
      this.$emit("to-parent");
    },
    setMsg(val) {
      this.msg = val;
    },
    getParent() {
      console.log(this.$parent.focus());
    },
  },
};
</script>

<style></style>
