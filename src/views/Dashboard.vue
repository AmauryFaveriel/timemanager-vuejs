<template>
  <div>
        <div class="panel-container" v-if="$store.getters.connectedUser">
            <clock-manager/>
            <working-times-panel/>
            <working-time-manager/>
        </div>
        <div v-else>
            <h1>Vous devez être connecté pour accéder aux panels</h1>
        </div>
  </div>
</template>

<script>
import clockManager from '../components/dashboard/clockManager'
import workingTimeManager from '../components/dashboard/workingTimeManager'
import workingTimesPanel from '../components/dashboard/workingTimesPanel'
export default {
    name: 'Dashboard',
    components: {
        clockManager,
        workingTimeManager,
        workingTimesPanel
    }
}
</script>

<style>
.panel-container {
    display: flex;
    justify-content: space-between;
}
</style>