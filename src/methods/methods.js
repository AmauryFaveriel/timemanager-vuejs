import data from '../assets/data.json'
import store from '../store'

const getClock = userId => {
    if (data.clocks.find(clock => clock.userId === userId)) {
        store.dispatch('changeClock', data.clocks.find(clock => clock.userId === userId).startDateTime)
    }
}
const getWorkingtimes = userId => {
    if (data.workingtimes.find(workingtime => workingtime.userId === userId)) {
        store.dispatch('changeWorkingtime', data.workingtimes.filter(workingtime => workingtime.userId === userId))
    }
}

export default {
    getUser: () => {
        return store.getters.getUser
    },
    connectUser: (email) => {
        if(data.users.find(user => user.email === email)) {
            const user = data.users.find(user => user.email === email)
            store.dispatch('changeActiveUser', user)
            getClock(user.id)
            getWorkingtimes(user.id)
        }
    },
    /* createUser: () => {

    },
    updateUser: (userId) => {

    },
    deleteUser: (userId) => {

    }, */
    stopClock: (userId) => {
        store.dispatch('changeClock', null)
        data.clocks.splice(data.clocks.indexOf(data.clocks.find(clock => clock.userId === userId)), 1, { startDateTime: null, userId: userId})
        console.log(data)
    },
    startClocks: (userId, startDateTime) => {
        store.dispatch('changeClock', startDateTime)
        data.clocks.splice(data.clocks.indexOf(data.clocks.find(clock => clock.userId === userId)), 1, { startDateTime: startDateTime, userId: userId})
        console.log(data)
    },
    createWorkingtime: (userId, startDateTime, endDateTime) => {
        const workingtime = {
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            userId: userId
        } 
        store.dispatch('addWorkingtime', workingtime)
        data.workingtimes.push(workingtime)
        console.log(data)
    }
}