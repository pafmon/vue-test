<template>
  <div id="app">
    Last message: <pre>{{ message }}</pre>
    Cache: <pre>{{ cache }}</pre>
    <input v-model="message">
    <button v-on:click="newMessage">new Message</button>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            message: 'n/a',
            cache: {}
        };
    },
    methods: {
        newMessage: function () {
             
            
            function randomString(length) {
                return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
            }
            
            var newCache = {};
            var view = this;


            fetch("http://cache.governify.io/sprscrt/rs/vtc")
            .then(function (response) { 
                return response.json();    
            })
            .then(function (remoteCache) {
                
                if(remoteCache){
                    newCache = remoteCache;
                }
                
                var key ="k"+randomString(4);

                newCache[key] = view.message + " " + (new Date()).toISOString();
                
                var values = (new URLSearchParams(newCache)).toString();

                fetch("http://cache.governify.io/sprscrt/rs/store/vtc?"+values)
                .then(function () { 
                    view.cache = newCache;
                    view.$forceUpdate(); 
                });
            });  
        }
    }
}
</script>

<style></style>