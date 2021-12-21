<template>
  <div>
    ComC
    title : {{title}}
    <button @click="getComA">get ComA</button>
    <button @click="setComAMsg">set ComA Msg</button>
    <button @click="handleInit">init</button>
  </div>
</template>

<script>
import bus from "../bus"
export default {
  props: ["title"],
  //inject:["title","ComA"],
  methods: {
    handleInit(){
      bus.$emit("init","hahaha");
    },
    getComA() {
      console.log(this.ComA);
      this.ComA.addChild(this);
    },
    setComAMsg(){
      this.ComA.setMsg("ComC set msg")
    },
  },
}
</script>

<style>

</style>