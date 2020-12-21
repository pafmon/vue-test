<template>
  <div id="app">
    Last message: <pre>{{ message }}</pre>
    <input v-model="message">
    <button v-on:click="newMessage">new Message</button>
  </div>
  
</template>

<script>
export default {
    data: {
        message: 'Hello Pablo!'
    },
    methods: {
        newMessage: function () {
            console.log("Enviado!!!");
            this.message = this.message.split('').reverse().join('')
        }
    },
    computed: {
        console: () => console,
        window: () => window,
    }
}
</script>

<style></style>