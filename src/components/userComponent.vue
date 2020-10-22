<template>
    <div class="user-container">
        <button @click="signIn">Sign in</button>
        <p v-if="$store.getters.connectedUser">Bonjour {{ getUser.username }}</p>
        <p v-else>Vous n'êtes pas connecté</p>
    </div>
</template>

<script>
import methods from '../methods/methods'
export default {
    name: 'userComponent',
    methods: {
        signIn: function () {
            methods.connectUser('amaury@mail.com')
        }
    },
    computed: {
        getUser: function () {
            return this.$store.getters.getUser
        }
    }
}
</script>

<style>

</style>