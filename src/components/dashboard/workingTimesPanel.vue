<template>
  <div>
    <h2>Historique du temps de travail</h2>
    <ul>
      <li v-for="(workingtime, index) in $store.getters.getWorkingtime" :key="index" @click="manageWorkingtime(workingtime)">
        {{ displayWorkingtime(workingtime) }}
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  mounted: function () {
    moment.locale('fr')
  },
  methods: {
    displayWorkingtime: function (workingtime) {
      return moment(workingtime.startDateTime).format('DD/MM/YYYY') + ' / ' + moment(moment(workingtime.endDateTime).diff(moment(workingtime.startDateTime))).subtract(1, 'hours').format('HH:mm')
    },
    manageWorkingtime: function (workingtime) {
      this.$store.dispatch('managedWorkingtime', workingtime)
    }
  }
}
</script>

<style>

</style>