// Use Local Storage
// Local Storage는 브라우저에서 제공하는 web storage api중 하나로 도메인별로 저장공간을 제공
// 단순한 key-value 형태의 저장소 (js의 object와 비슷)

// 주요 메서드
// localStorage.getItem(key) : (fetch) JSON.parse()
// localStorage.setItem(key, value) :(save) key-value형태의 string만 저장(JSON.stringify)
// localStorage.remove(key)

const STORAGE_KEY = "vue-todo-app";
const todoStorage = {
  fetch: function () {
    // JSON -> object
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },
  save: function (todos) {
    // objcet -> JSON
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

const app = new Vue({
  el: "#app",
  data: {
    content: null,
    todos: todoStorage.fetch(),
    status: "all",
  },
  methods: {
    addTodo: function () {
      const todo = {
        content: this.content, //할일 내용
        isCompleted: false, //완료여부
        date: new Date().getTime(), //key로 활용
      };
      this.todos.push(todo);
      this.content = null;
    },
    toggleTodo: function (todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    deleteCompleted: function () {
      this.todos = this.todos.filter((todo) => {
        return !todo.isCompleted;
      });
    },
  },
  computed: {
    todoListByStatus: function () {
      return this.todos.filter((todo) => {
        if (this.status === "inProgress") return !todo.isCompleted;
        if (this.status === "completed") return todo.isCompleted;
        return true;
      });
    },
  },
  watch: {
    todos: {
      // 1.deep
      // Vue는 배열이나 객체를 watch할 때, 속성 내부가 변경되었다고 생각하지 않음
      // 즉 todos의 내용을 변경되었지만, todos는 여전히 같은 array 객체 주소를 가리킴
      // Vue에게 변경을 watch할 때 내부 속성을 검사하길 원할 때 알려주는 속성
      deep: true,
      // 2. handler
      // handler는 watch된 '속성'이 변경될 때 호출될 함수를 지정
      handler: function (todos) {
        todoStorage.save(todos);
      },
    },
  },
});
