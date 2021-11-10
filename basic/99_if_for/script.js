const app = new Vue({
    el: '#app',
    data: {
        users: [
            { id: 1, name: 'harry', isActive: false, },
            { id: 2, name: 'john', isActive: true, },
            { id: 3, name: 'tony', isActive: false, },
            { id: 4, name: 'eric', isActive: true, },
        ],
        shouldShowUsers: true,
    },
    computed: {
        activeUsers: function () {
                return this.users.filter(user => {
                return user.isActive
            })
        }
    },
})