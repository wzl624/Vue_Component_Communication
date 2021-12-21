<template>
  <div>
    Parent msg : {{ msg }}
    <input type="text" ref="input" />
    <Child ref="child" title="parent to chile title" @to-parent="fromChild">
    </Child>
    <Foo ref="child"></Foo>
    <button @click="focus">focus</button>
    <button @click="setChild">set child</button>
    <button @click="getChildren">get children</button>
  </div>
</template>

<script>
import Child from "./Child.vue";
import Foo from "./Foo.vue";
export default {
  data() {
    return {
      msg: "parent-msg",
    };
  },
  components: {
    Child,
    Foo,
  },
  methods: {
    fromChild() {
      this.msg = "child title chenged";
    },
    setChild() {
      console.log(this.$refs);
      //this.$refs.child.setMsg("parent set");
    },
    focus() {
      console.log(this.$refs);
      // $refs -> element
      this.$refs.input.focus();
    },
    getChildren() {
      console.log(this.$children);
      const firstComponent = this.$children[0];
      firstComponent.setMsg("first heiheihei");
    },
  },
};
</script>

<style></style>
