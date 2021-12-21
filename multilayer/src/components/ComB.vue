<template>
  <div>
    ComB
    <ComC :title="$attrs.title"></ComC>
    <button @click="getListeners">get listeners</button>
  </div>
</template>

<script>
import ComC from "./ComC.vue"
export default {
  inheritAttrs:false,
  components:{ComC},
  methods: {
    getListeners() {
      console.log(this.$listeners);
      this.$listeners.a();
      this.$listeners.b();
    }
  },
}
</script>

<style>

</style>