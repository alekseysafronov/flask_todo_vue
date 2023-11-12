// https://testdriven.io/blog/combine-flask-vue/

const vm = new Vue({ // Again, vm is our Vue instance's name for consistency.
    el: '#vm',
    delimiters: ['[[', ']]'],
    data: {
        greeting: 'Hello Vue!'
    }
});



const EventHandling = {
    data() {
      return {
        message: 'Привет, Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(EventHandling).mount('#event-handling')
