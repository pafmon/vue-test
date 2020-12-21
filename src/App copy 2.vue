<template>
  <div id="app">
    Last message: <pre>{{ message }}</pre>
    <input v-model="message">
    <button v-on:click="newMessage">new Message</button>
  </div>
  
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello Pablo!'
        };
    },
    methods: {
        newMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>

<style></style>