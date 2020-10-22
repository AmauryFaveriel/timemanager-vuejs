<template>
  <div>
    <h2>Gestion temps de travail</h2>
    <div v-if="workingtime">
      <h2>{{ startDateTime.format("DD MMMM YYYY") }}</h2>
      <p>Début : {{ startDateTime.format("HH:mm") }}</p>
      <p>Fin : {{ endDateTime.format("HH:mm") }}</p>
      <p>Durée : {{ workingtimeDuration.format("HH:mm") }}</p>
    </div>
    <div v-else>Pas de temps de travail sélectionné</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  mounted: function () {
    moment.locale('fr')
  },
  computed: {
    workingtime: function () {
      return this.$store.getters.managedWorkingtime
    },
    startDateTime: function () {
      return moment(this.workingtime.startDateTime)
    },
    endDateTime: function () {
      return moment(this.workingtime.endDateTime)
    },
    workingtimeDuration: function () {
      return moment(this.endDateTime.diff(this.startDateTime)).subtract(1, 'hours')
    }
  }
}
</script>

<style>

</style>