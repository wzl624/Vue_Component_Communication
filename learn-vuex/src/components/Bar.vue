<template>
  <div>
    <p>
      10年后的年龄 ： {{tenYearsOld}}
    </p>
    <p>
      年龄为18的用户：{{findUserByAge(18)}}
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(["tenYearsOld","findUserByAge"]),
  },
}
</script>

<style>

</style>