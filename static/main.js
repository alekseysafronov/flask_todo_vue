// https://testdriven.io/blog/combine-flask-vue/

const vm = new Vue({ // Again, vm is our Vue instance's name for consistency.
    el: '#vm',
    delimiters: ['[[', ']]'],
    data: {
        greeting: 'Hello Vue!'
    }
})