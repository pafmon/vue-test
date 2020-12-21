<template>
  <div id="app">
    Last message: <pre>{{ message }}</pre>
    Cache: <pre>{{ cache }}</pre>
    Log: <span>{{ log }}</span>
    <input v-model="message">
    <button v-on:click="newMessage">new Message</button>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            message: 'n/a',
            cache: {},
            log : "Init"
        };
    },
    methods: {
        newMessage: function () {
             
            this.log = "Clicked New Message";
            this.$forceUpdate(); 

            function randomString(length) {
                return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
            }
            
            var newCache = {};
            var view = this;

            this.log = "Looking for cache...";
            this.$forceUpdate(); 

            fetch("http://cache.governify.io/sprscrt/rs/vtc")
            .then(function (response) { 
                view.log = "Response from cache received";
                view.$forceUpdate(); 
                
                return response.json();    
            })
            .then(function (remoteCache) {
                view.log = "Response from cache parsed";
                view.$forceUpdate(); 

                if(remoteCache){
                    newCache = remoteCache;
                }
                
                var key ="k"+randomString(4);

                newCache[key] = view.message + "_" + (new Date()).toISOString();
                
                var values = (new URLSearchParams(newCache)).toString();

                view.log = "new cache built";
                view.$forceUpdate(); 
                fetch("http://cache.governify.io/sprscrt/rs/store/vtc?"+values)
                .then(function () { 
                    view.log = "Cache updated";
                    view.$forceUpdate(); 

                    view.cache = newCache;
                    view.$forceUpdate(); 
                });
            });  
        }
    }
}
</script>

<style></style>