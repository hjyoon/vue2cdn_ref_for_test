const app = new Vue({
    el: '#app',
    data: {
        myString : 'hello',
        fruits : ['apple', 'banana', 'coconut'],
        todos: [
            { id: 1, title: 'todo1', completed: true },
            { id: 2, title: 'todo2', completed: false },
            { id: 3, title: 'todo3', completed: true },
        ],
        myObj : {
            name: 'kim',
            age: 100,
        }
    }
})