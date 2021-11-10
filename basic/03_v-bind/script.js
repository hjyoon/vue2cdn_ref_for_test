const app = new Vue({
    el: '#app',
    data: {
        imageSrc: 'https://picsum.photos/200/300/',
        isRed: false,
        activeRed: 'active',
        myBackground: 'my-background-color',
        todos: [
            { id: 1, title: 'todo 1', isActive: true },
            { id: 2, title: 'todo 1', isActive: false },
        ],
        fontSize: 30,
    }
})