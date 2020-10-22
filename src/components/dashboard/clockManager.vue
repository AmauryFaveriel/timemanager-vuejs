<template>
  <div>
    <h2>Travail en cours</h2>
    <h2>{{ clock }}</h2>
    <button v-if="clockIn" @click="stopWork">Stop work</button>
    <button v-else  @click="startWork">Start work</button>
  </div>
</template>

<script>
import moment from 'moment'
import methods from '../../methods/methods'
export default {
    name: 'clockManager',
    data: function () {
        return {
            clock: null
        }
    },
    mounted: function () {
        this.displayTime()
        moment().locale('fr')
    },
    methods: {
        displayTime: function () {
            const nullDate = moment().hour(0).minute(0).second(0)
            if (this.startDateTime === null) {
                this.clock = nullDate.format('HH:mm:ss')
                return;
            } 
            this.clock = nullDate.add(moment().diff(this.startDateTime)).format('HH:mm:ss')
            this.$options.timer = window.setTimeout(this.displayTime,1000)
        },
        startWork: function () {
            methods.startClocks(this.getUser.id, moment().format())
            this.displayTime()
        },
        stopWork: function () {
            methods.createWorkingtime(this.getUser.id, this.startDateTime, moment().format())
            methods.stopClock(this.getUser.id)
        }
    },
    computed: {
        startDateTime: function () {
            return this.$store.getters.getClock
        },
        clockIn: function () {
            return this.startDateTime !== null 
        },
        getUser: function () {
            return this.$store.getters.getUser
        }
    }
}
</script>

<style>

</style>