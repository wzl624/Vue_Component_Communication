<template>
  <div>
    Foo
    <p>
      username:{{username}}
    </p>
    <p>
      age:{{age}}
    </p>
    <p>
      10年后的年龄 ： {{tenYearsOld}}
    </p>
    <div>
      <button @click="changeUsername">change username</button>
      <button @click="changeAge">change age</button>
      <button @click="asyncChangeUsername">async change username</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      // username: this.$store.state.username,
      // age : this.$store.state.age,
    }
  },
  computed: {
    ...mapState(["username","age"]),
    tenYearsOld(){
      return this.$store.state.age + 10;
    }
    // username() {
    //   return this.$store.state.username;
    // },
    // age() {
    //   return this.$store.state.age;
    // },
  },
  methods: {
    changeUsername() {
      this.$store.commit("changeUsername","hahahaha");
      
    },
    changeAge(){
      this.$store.commit("changeAge",{age:88});
    },
    async asyncChangeUsername(){
      await this.$store.dispatch("changeUsername","asyncChangeName");
    }
  },
}
</script>

<style>

</style>