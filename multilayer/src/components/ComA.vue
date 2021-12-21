<template>
  <div>
    ComA msg : {{msg}}
    <ComB v-bind="$attrs" @a="handleA" @b="handleB"></ComB>
    <button @click="getChildren">get children</button>
    <button @click="handleAttrs">attrs</button>
  </div>
</template>

<script>
import ComB from "./ComB.vue"
import bus from "../bus.js"
export default {
  mounted () {
    //bus.$on("init",this.init);
    bus.$once("init",this.init);
  },
  components:{ComB},
  inheritAttrs:false,
  //props:["title"],
  data() {
    return {
      msg:"",
      comChildren:[],
    }
  },
  // provide:{
  //   title:"from ComA title",
  //   ComA:this,
  // }
  provide(){
    return {
      title:"from ComA title",
      ComA:this,
    }
  },
  methods: {
    init(val){
      console.log(val);
      //bus.$off("init");
    },
    handleA() {
      console.log("AAAAAAAAAAA");
    },
    handleB() {
      console.log("BBBBBBBBB");
    },
    handleAttrs() {
      console.log(this.$attrs);
    },
    setMsg(val) {
      this.msg = val;
    },
    getChildren(){
      console.log(this.comChildren);
    },
    addChild(child){
      this.comChildren.push(child);
    },
    
  },
}
</script>

<style>

</style>